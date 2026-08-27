import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { categories, posters, type Poster } from "@/data/posters";
import { PosterCard } from "@/components/PosterCard";

type Sort = "deals" | "cheap" | "expensive" | "az";

const PAGE = 60;

export function PosterBrowser({
  initialCategory = "all",
  lockCategory = false,
}: {
  initialCategory?: string;
  lockCategory?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState(initialCategory);
  const [sort, setSort] = useState<Sort>("deals");
  const [maxPrice, setMaxPrice] = useState(60);
  const [shown, setShown] = useState(PAGE);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list: Poster[] = posters.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (p.price > maxPrice) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.subject.toLowerCase().includes(q) ||
        p.style.toLowerCase().includes(q) ||
        p.category.includes(q)
      );
    });
    list = [...list].sort((a, b) => {
      if (sort === "cheap") return a.price - b.price;
      if (sort === "expensive") return b.price - a.price;
      if (sort === "az") return a.subject.localeCompare(b.subject);
      return b.wasPrice / b.price - a.wasPrice / a.price;
    });
    return list;
  }, [query, cat, sort, maxPrice]);

  const visible = results.slice(0, shown);

  return (
    <section id="browse" className="mx-auto max-w-7xl px-4 py-12">
      <div className="sticky top-0 z-20 -mx-4 border-y border-border bg-background/90 px-4 py-4 backdrop-blur">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShown(PAGE);
              }}
              placeholder="Search posters — tony hawk, pipeline, akira, kobe, gta..."
              aria-label="Search posters"
              className="w-full border border-input bg-secondary py-3 pl-10 pr-10 font-mono text-sm uppercase tracking-wide text-foreground placeholder:normal-case placeholder:tracking-normal placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            aria-label="Sort posters"
            className="border border-input bg-secondary px-3 py-3 font-mono text-xs uppercase tracking-widest focus:border-primary focus:outline-none"
          >
            <option value="deals">Biggest discount</option>
            <option value="cheap">Cheapest first</option>
            <option value="expensive">Priciest first</option>
            <option value="az">A–Z</option>
          </select>
          <label className="flex items-center gap-2 border border-input bg-secondary px-3 py-3 font-mono text-xs uppercase tracking-widest">
            Under ${maxPrice}
            <input
              type="range"
              min={5}
              max={60}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              aria-label="Max price"
              className="accent-primary"
            />
          </label>
        </div>

        {!lockCategory && (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            <Chip active={cat === "all"} onClick={() => setCat("all")} label="All" />
            {categories.map((c) => (
              <Chip
                key={c.id}
                active={cat === c.id}
                onClick={() => {
                  setCat(c.id);
                  setShown(PAGE);
                }}
                label={c.name}
              />
            ))}
          </div>
        )}
      </div>

      <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {results.length.toLocaleString()} deals found
        {query ? ` for "${query}"` : ""}
      </p>

      {results.length === 0 ? (
        <p className="py-20 text-center font-mono text-sm text-muted-foreground">
          No hits. Try a shorter search or raise the price cap.
        </p>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {visible.map((p) => (
            <PosterCard key={p.id} poster={p} />
          ))}
        </div>
      )}

      {shown < results.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShown((s) => s + PAGE)}
            className="sticker-shadow border border-primary bg-secondary px-8 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Load more posters
          </button>
        </div>
      )}
    </section>
  );
}

function Chip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`skew-tag shrink-0 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-secondary text-muted-foreground hover:border-primary hover:text-primary"
      }`}
    >
      {label}
    </button>
  );
}
