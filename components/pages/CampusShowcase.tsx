"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { CuratedPhoto } from "@/lib/photography";
import { Reveal, RevealGroup, RevealItem, RevealScale } from "@/components/Reveal";

type CampusShowcaseProps = {
  photos: CuratedPhoto[];
};

export default function CampusShowcase({ photos }: CampusShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selected = useMemo(
    () => photos[selectedIndex] ?? photos[0],
    [photos, selectedIndex],
  );

  if (!selected) return null;

  return (
    <div>
      <RevealScale>
        <figure className="shadow-card overflow-hidden border border-ink/8 bg-white">
          <div className="photo-frame photo-grade-cinematic relative aspect-[16/9] w-full">
            <Image
              src={selected.src}
              alt={selected.alt}
              fill
              priority
              sizes="100vw"
              className="photo-image object-cover"
            />
            <div className="photo-overlay" aria-hidden />
          </div>
          {selected.caption && (
            <figcaption className="px-4 py-3 text-sm font-medium tracking-wide text-ink/65">
              {selected.caption}
            </figcaption>
          )}
        </figure>
      </RevealScale>

      <RevealGroup className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
        {photos.map((photo, i) => {
          const active = i === selectedIndex;
          return (
            <RevealItem key={photo.src}>
              <button
                type="button"
                onClick={() => setSelectedIndex(i)}
                aria-pressed={active}
                aria-label={`${photo.caption ?? photo.alt}を表示`}
                className={`group block w-full text-left transition-transform duration-300 hover:-translate-y-1 ${
                  active ? "ring-2 ring-accent ring-offset-2 ring-offset-cream" : ""
                }`}
              >
                <figure className="overflow-hidden border border-ink/8 bg-white shadow-card">
                  <div className="photo-frame photo-grade-documentary relative aspect-[4/3] w-full">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 768px) 20vw, 50vw"
                      className="photo-image object-cover"
                    />
                    <div className="photo-overlay" aria-hidden />
                  </div>
                  {photo.caption && (
                    <figcaption className="px-2.5 py-2 text-[11px] font-medium tracking-wide text-ink/60 md:text-xs">
                      {photo.caption}
                    </figcaption>
                  )}
                </figure>
              </button>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </div>
  );
}
