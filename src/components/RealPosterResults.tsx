import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { searchPosters, type RealPoster } from "@/lib/posterSearch.functions";

const clientCache = new Map<string, { results: RealPoster[]; error?: string }>();

export function RealPosterResults({ query }: { query: string }) {
  const search = useServerFn(searchPosters);
  const [debounced, setDebounced] = useState(query.trim());
  const [state, setState] = useState<{
    loading: boolean;
    results: RealPoster[];
    error?: string;
  }>({ loading: false, results: [] });

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim()), 500);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    if (debounced.length < 2) return;
    const key = debounced.toLowerCase();
    const cached = clientCache.get(key);
    if (cached) {
      setState({ loading: false, ...cached });
      return;
    }
    let cancelled = false;
    setState((s) => ({ ...s, loading: true }));
    search({ data: { q: debounced } })
      .then((r) => {
        if (!r.error) clientCache.set(key, r);
        if (!cancelled) setState({ loading: false, ...r });
      })
      .catch(() => !cancelled && setState({ loading: false, results: [], error: "search_failed" }));
    return () => {
      cancelled = true;
    };
  }, [debounced, search]);

  if (debounced.length < 2) return null;

  return (
    <div className="mt-6 border border-border bg-card p-4">
      <h3 className="display text-2xl text-primary">Real posters for "{debounced}"</h3>
      {state.loading ? (
        <p className="py-8 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Digging through the web...
        </p>
      ) : state.error === "not_configured" ? (
        <p className="py-8 text-center font-mono text-sm text-muted-foreground">
          Real poster search isn't switched on yet.
        </p>
      ) : state.error ? (
        <p className="py-8 text-center font-mono text-sm text-muted-foreground">
          Search hiccuped — try again in a sec.
        </p>
      ) : state.results.length === 0 ? (
        <p className="py-8 text-center font-mono text-sm text-muted-foreground">
          No posters found for that search — try a different title
        </p>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {state.results.map((r) => (
            <a
              key={r.imageUrl}
              href={r.sourceUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group flex flex-col border border-border bg-background transition-transform hover:-translate-y-1 hover:border-primary"
            >
              <div className="aspect-[2/3] overflow-hidden bg-secondary">
                <img
                  src={r.imageUrl}
                  onError={(e) => {
                    if (e.currentTarget.src !== r.thumbnailUrl) e.currentTarget.src = r.thumbnailUrl;
                  }}
                  alt={r.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 p-2">
                <p className="line-clamp-2 text-xs font-semibold leading-tight">{r.title}</p>
                <span className="mt-auto flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                  {r.sourceDomain} <ExternalLink className="size-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
