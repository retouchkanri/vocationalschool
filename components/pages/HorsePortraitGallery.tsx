"use client";

import { useState } from "react";
import PhotoFrame from "@/components/PhotoFrame";
import type { CuratedPhoto } from "@/lib/photography";

type HorsePortraitGalleryProps = {
  photos: CuratedPhoto[];
};

const PREVIEW_COUNT = 5;

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
          <div key={photo.src}>
            <PhotoFrame
              src={photo.src}
              alt={photo.alt}
              aspect="portrait"
              grade="portrait"
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
              className="shadow-card"
            />
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
