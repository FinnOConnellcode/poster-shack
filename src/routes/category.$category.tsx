import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { categoryById, posters } from "@/data/posters";
import { PosterBrowser } from "@/components/PosterBrowser";

export const Route = createFileRoute("/category/$category")({
  loader: ({ params }) => {
    const cat = categoryById.get(params.category);
    if (!cat) throw notFound();
    const count = posters.filter((p) => p.category === cat.id).length;
    return { cat, count };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found — Wall Rats" }, { name: "robots", content: "noindex" }],
      };
    }
    const { cat, count } = loaderData;
    const title = `Cheap ${cat.name} Posters — ${count} Deals | Wall Rats`;
    const description = `${count} cheap ${cat.name.toLowerCase()} poster deals swept from across the web. ${cat.blurb}. Search and click straight through to buy.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { cat, count } = Route.useLoaderData();

  return (
    <main>
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="display text-3xl text-primary">
            Wall Rats
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="size-3" /> All categories
          </Link>
        </div>
      </header>

      <section className="border-b border-border px-4 py-14">
        <div className="mx-auto max-w-7xl">
          <span className="skew-tag inline-block bg-accent px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-foreground">
            {count} deals
          </span>
          <h1 className="mt-4 text-6xl leading-[0.85] md:text-7xl">
            {cat.name} <span className="text-primary">posters</span>
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{cat.blurb}</p>
        </div>
      </section>

      <PosterBrowser initialCategory={cat.id} lockCategory />
    </main>
  );
}
