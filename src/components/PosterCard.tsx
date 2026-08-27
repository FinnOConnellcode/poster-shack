import { ExternalLink, Star } from "lucide-react";
import type { Poster } from "@/data/posters";
import { categoryById } from "@/data/posters";

export function PosterCard({ poster }: { poster: Poster }) {
  const off = Math.round((1 - poster.price / poster.wasPrice) * 100);
  const cat = categoryById.get(poster.category);

  return (
    <a
      href={poster.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group relative flex flex-col border border-border bg-card transition-transform duration-150 hover:-translate-y-1 hover:border-primary"
    >
      <div
        className="grain relative aspect-[2/3] overflow-hidden text-foreground/70"
        style={{
          backgroundImage: `linear-gradient(150deg, oklch(0.55 0.19 ${poster.hue}), oklch(0.18 0.05 ${(poster.hue + 60) % 360}) 70%)`,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-between p-3">
          <span className="skew-tag w-fit bg-background/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
            {cat?.name}
          </span>
          <span className="display text-2xl leading-[0.92] text-background drop-shadow-[2px_2px_0_rgba(0,0,0,0.45)]">
            {poster.subject}
          </span>
        </div>
        <span className="absolute right-0 top-3 bg-accent px-2 py-1 font-mono text-[11px] font-bold text-accent-foreground">
          -{off}%
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-3">
        <p className="line-clamp-2 text-sm font-semibold leading-tight">{poster.title}</p>
        <p className="font-mono text-[11px] uppercase text-muted-foreground">
          {poster.size} · {poster.store}
          {poster.shipsFree ? " · free ship" : ""}
        </p>
        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            <span className="display text-2xl text-primary">${poster.price.toFixed(2)}</span>
            <span className="ml-2 font-mono text-xs text-muted-foreground line-through">
              ${poster.wasPrice.toFixed(2)}
            </span>
          </div>
          <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
            <Star className="size-3 fill-current text-primary" />
            {poster.rating}
          </span>
        </div>
        <span className="mt-2 flex items-center justify-center gap-1 border border-primary/60 bg-primary/10 py-1.5 font-mono text-[11px] uppercase tracking-widest text-primary group-hover:bg-primary group-hover:text-primary-foreground">
          Find it on {poster.store} <ExternalLink className="size-3" />
        </span>
      </div>
    </a>
  );
}
