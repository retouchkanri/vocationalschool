import Image from "next/image";
import type { CuratedPhoto } from "@/lib/photography";

type CampusShowcaseProps = {
  photos: CuratedPhoto[];
};

/** Single-row marquee that scrolls slowly right → left. */
export default function CampusShowcase({ photos }: CampusShowcaseProps) {
  if (!photos.length) return null;

  const loop = [...photos, ...photos];

  return (
    <div className="group/marquee relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-cream to-transparent md:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-cream to-transparent md:w-16" />

      <div className="flex w-max animate-marquee gap-4 py-1 group-hover/marquee:[animation-play-state:paused] md:gap-5">
        {loop.map((photo, index) => (
          <figure
            key={`${photo.src}-${index}`}
            className="relative h-52 w-72 shrink-0 overflow-hidden shadow-card first:ml-0 sm:h-56 sm:w-80 md:h-64 md:w-[22rem]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 22rem, 80vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
              aria-hidden
            />
            {photo.caption ? (
              <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-4 text-center font-mincho text-sm font-semibold tracking-wide text-white md:text-base">
                {photo.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  );
}
