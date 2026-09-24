import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type RealPoster = {
  title: string;
  imageUrl: string;
  thumbnailUrl: string;
  sourceUrl: string;
  sourceDomain: string;
};

type CacheEntry = { at: number; results: RealPoster[] };
const cache = new Map<string, CacheEntry>();
const TTL = 1000 * 60 * 60 * 6; // 6 hours

export const searchPosters = createServerFn({ method: "GET" })
  .inputValidator((data) => z.object({ q: z.string().trim().min(2).max(100) }).parse(data))
  .handler(async ({ data }): Promise<{ results: RealPoster[]; error?: string }> => {
    const key = data.q.toLowerCase();
    const hit = cache.get(key);
    if (hit && Date.now() - hit.at < TTL) return { results: hit.results };

    const apiKey = process.env["GOOGLE_SEARCH_API_KEY"];
    const cx = process.env["GOOGLE_SEARCH_ENGINE_ID"];
    if (!apiKey || !cx) return { results: [], error: "not_configured" };

    const url = new URL("https://www.googleapis.com/customsearch/v1");
    url.searchParams.set("key", apiKey);
    url.searchParams.set("cx", cx);
    url.searchParams.set("q", `${data.q} poster`);
    url.searchParams.set("searchType", "image");
    url.searchParams.set("num", "10");
    url.searchParams.set("safe", "active");

    const res = await fetch(url);
    if (!res.ok) {
      console.error("Google search failed", res.status, await res.text());
      return { results: [], error: "search_failed" };
    }
    const json = (await res.json()) as {
      items?: Array<{
        title: string;
        link: string;
        displayLink: string;
        image?: { contextLink?: string; thumbnailLink?: string };
      }>;
    };
    const results: RealPoster[] = (json.items ?? []).map((i) => ({
      title: i.title,
      imageUrl: i.link,
      thumbnailUrl: i.image?.thumbnailLink ?? i.link,
      sourceUrl: i.image?.contextLink ?? i.link,
      sourceDomain: i.displayLink,
    }));
    cache.set(key, { at: Date.now(), results });
    return { results };
  });
