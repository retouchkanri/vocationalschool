"use client";

import { useState } from "react";
import PhotoFrame from "@/components/PhotoFrame";
import type { CuratedPhoto } from "@/lib/photography";

type HorsePortraitGalleryProps = {
  photos: CuratedPhoto[];
};

const PREVIEW_COUNT = 10;

export default function HorsePortraitGallery({
  photos,
}: HorsePortraitGalleryProps) {
  const [expanded, setExpanded] = useState(false);

  const hasMore = photos.length > PREVIEW_COUNT;
  const visiblePhotos =
    expanded || !hasMore ? photos : photos.slice(0, PREVIEW_COUNT);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-4">
        {visiblePhotos.map((photo) => (
          <div key={photo.src} className="relative overflow-hidden rounded-lg shadow-card">
            <PhotoFrame
              src={photo.src}
              alt={photo.alt}
              aspect="portrait"
              grade="portrait"
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
            />
            {photo.caption ? (
              <p className="pointer-events-none absolute inset-x-0 bottom-0 z-10 truncate bg-gradient-to-t from-black/75 via-black/45 to-transparent px-2 pb-2.5 pt-8 text-center font-mincho text-sm font-bold tracking-wide text-white md:text-[15px]">
                {photo.caption}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      {hasMore ? (
        <p className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-primary bg-white px-8 py-4 text-base font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
          >
            {expanded ? "元に戻す" : "もっと見る"}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              {expanded ? "↑" : "→"}
            </span>
          </button>
        </p>
      ) : null}
    </>
  );
}
