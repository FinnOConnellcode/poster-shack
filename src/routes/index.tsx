import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Zap } from "lucide-react";
import heroImg from "@/assets/hero-grunge.jpg";
import { categories, posters } from "@/data/posters";
import { PosterBrowser } from "@/components/PosterBrowser";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wall Rats — Cheap Sports, Movie & TV Posters" },
      {
        name: "description",
        content:
          "Thousands of cheap poster deals swept from across the web — skate, surf, ball sports, movies, TV, anime and gaming. Search it, click it, buy it.",
      },
      { property: "og:title", content: "Wall Rats — Cheap Poster Deals" },
      {
        property: "og:description",
        content:
          "Skate, surf, sports, movie and TV posters for cheap. Search thousands of deals and jump straight to where to buy.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const sports = categories.filter((c) => c.group === "sports");
  const screen = categories.filter((c) => c.group === "screen");

  return (
    <main>
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <span className="display text-3xl text-primary">Wall Rats</span>
          <nav className="flex gap-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <a href="#browse" className="hover:text-primary">
              Search
            </a>
            <a href="#categories" className="hover:text-primary">
              Categories
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroImg}
          alt="Skater airing out of an empty pool with a surf break behind, in a torn-paper zine collage"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36">
          <span className="skew-tag inline-block bg-accent px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-foreground">
            <Flame className="mr-1 inline size-3" />
            {posters.length.toLocaleString()} deals swept from the web
          </span>
          <h1 className="mt-5 max-w-3xl text-6xl leading-[0.85] md:text-8xl">
            Cheap posters
            <br />
            <span className="text-primary">for your wall,</span>
            <br />
            not your wallet.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            We scrape the bargain bins of the internet for sports, movie, TV, anime and gaming
            posters — then hand you the link straight to the cheapest listing.
          </p>
          <a
            href="#browse"
            className="sticker-shadow mt-8 inline-flex items-center gap-2 border border-primary bg-secondary px-8 py-3 font-mono text-xs uppercase tracking-[0.25em] text-primary transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <Zap className="size-4" /> Start digging
          </a>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-4xl text-foreground">Sports</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {sports.map((c) => (
            <CategoryTile key={c.id} id={c.id} name={c.name} blurb={c.blurb} />
          ))}
        </div>

        <h2 className="mt-14 text-4xl text-foreground">Movies, TV & More</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {screen.map((c) => (
            <CategoryTile key={c.id} id={c.id} name={c.name} blurb={c.blurb} />
          ))}
        </div>
      </section>

      <PosterBrowser />

      <footer className="border-t border-border px-4 py-10 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        Wall Rats · deal links go out to eBay, Etsy, Amazon, Redbubble, Displate & more · prices
        change fast, grab it while it's cheap
      </footer>
    </main>
  );
}

function CategoryTile({ id, name, blurb }: { id: string; name: string; blurb: string }) {
  return (
    <Link
      to="/category/$category"
      params={{ category: id }}
      className="grain group border border-border bg-card p-4 transition-colors hover:border-primary"
    >
      <p className="display text-xl text-primary">{name}</p>
      <p className="mt-1 text-xs text-muted-foreground">{blurb}</p>
    </Link>
  );
}
