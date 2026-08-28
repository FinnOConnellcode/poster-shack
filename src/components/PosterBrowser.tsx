diff --git a/src/components/PosterBrowser.tsx b/src/components/PosterBrowser.tsx
index 0000000..0000000 100644
--- a/src/components/PosterBrowser.tsx
+++ b/src/components/PosterBrowser.tsx
@@
-import { useMemo, useState } from "react";
+import { useMemo, useState, useRef, useEffect } from "react";
 import { Search, X } from "lucide-react";
 import { categories, posters, type Poster } from "@/data/posters";
 import { PosterCard } from "@/components/PosterCard";
+import { ScrollPreview } from "@/components/ScrollPreview";
@@
   const visible = results.slice(0, shown);
+  const containerRef = useRef<HTMLElement | null>(null);
+  const [visibleIds, setVisibleIds] = useState<string[]>([]);
+
+  useEffect(() => {
+    if (typeof window === "undefined") return;
+    const observed = new Map<Element, string>();
+    let raf = 0;
+
+    const updateVisible = () => {
+      const visibleArr: { el: Element; top: number; id: string }[] = [];
+      observed.forEach((id, el) => {
+        const rect = el.getBoundingClientRect();
+        if (rect.top < window.innerHeight && rect.bottom > 0) {
+          visibleArr.push({ el, top: rect.top, id });
+        }
+      });
+      visibleArr.sort((a, b) => a.top - b.top);
+      const ids = visibleArr.map((v) => v.id);
+      setVisibleIds((prev) => {
+        if (prev.length === ids.length && prev.every((x, i) => x === ids[i])) return prev;
+        return ids;
+      });
+    };
+
+    const observer = new IntersectionObserver(
+      (entries) => {
+        let changed = false;
+        for (const e of entries) {
+          const el = e.target as Element;
+          const id = (el.getAttribute("data-poster-id") ?? "").toString();
+          if (!id) continue;
+          const isVisible = e.isIntersecting && e.intersectionRatio > 0;
+          if (isVisible) observed.set(el, id);
+          else observed.delete(el);
+          changed = true;
+        }
+        if (changed) {
+          if (raf) cancelAnimationFrame(raf);
+          raf = requestAnimationFrame(updateVisible);
+        }
+      },
+      { root: null, rootMargin: "0px", threshold: [0, 0.25, 0.5] }
+    );
+
+    const selectorRoot = document;
+    const nodes = Array.from(selectorRoot.querySelectorAll("a[data-poster-id]"));
+    nodes.forEach((n) => observer.observe(n));
+
+    return () => {
+      if (raf) cancelAnimationFrame(raf);
+      observer.disconnect();
+      observed.clear();
+    };
+  }, [shown, query, cat, sort, maxPrice]);
+
+  const visiblePosters = useMemo(() => {
+    const map = new Map(results.map((r) => [r.id, r]));
+    return visibleIds.map((id) => map.get(id)).filter(Boolean) as Poster[];
+  }, [visibleIds, results]);
@@
-    <section id="browse" className="mx-auto max-w-7xl px-4 py-12">
+    <section id="browse" ref={containerRef as any} className="mx-auto max-w-7xl px-4 py-12">
@@
-        {visible.map((p) => (
-            <PosterCard key={p.id} poster={p} />
-          ))}
+            {visible.map((p) => (
+              <PosterCard key={p.id} poster={p} />
+            ))}
           </div>
         )}
+
+        <ScrollPreview posters={visiblePosters} />
*** End Patch
