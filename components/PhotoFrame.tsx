import Image from "next/image";
import type { PhotoAspect } from "@/lib/photography";

const ASPECT: Record<PhotoAspect, string> = {
  hero: "aspect-[16/9] md:aspect-[21/9]",
  card: "aspect-[4/3]",
  story: "aspect-square",
  gallery: "aspect-[3/2]",
  cta: "aspect-[16/9]",
};

type PhotoGrade = "cinematic" | "documentary" | "portrait";

type PhotoFrameProps = {
  src: string;
  alt: string;
  aspect?: PhotoAspect;
  grade?: PhotoGrade;
  priority?: boolean;
  sizes?: string;
  className?: string;
  caption?: string;
  zoom?: boolean;
};

/**
 * Premium Documentary photo frame with cinematic color grading,
 * warm overlays, and editorial aspect ratios.
 */
export default function PhotoFrame({
  src,
  alt,
  aspect = "gallery",
  grade = "documentary",
  priority = false,
  sizes = "100vw",
  className = "",
  caption,
  zoom = true,
}: PhotoFrameProps) {
  return (
    <figure className={`group relative overflow-hidden ${className}`}>
      <div
        className={`photo-frame photo-grade-${grade} ${zoom ? "img-zoom" : ""} relative ${ASPECT[aspect]}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="photo-image object-cover"
        />
        <div className="photo-overlay" aria-hidden />
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs font-medium tracking-wider text-ink/60">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
