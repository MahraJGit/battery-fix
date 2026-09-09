import Image from "next/image";

type FigmaIconProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
  /**
   * Prefer fixing SVG assets over flips.
   * Only enable when an arrow/asset is visibly mirrored vs design.
   */
  flipY?: boolean;
  flipX?: boolean;
  priority?: boolean;
};

export function FigmaIcon({
  src,
  alt = "",
  width,
  height,
  className = "",
  flipY = false,
  flipX = false,
  priority = false,
}: FigmaIconProps) {
  const flips = [flipX ? "scale-x-[-1]" : "", flipY ? "scale-y-[-1]" : ""]
    .filter(Boolean)
    .join(" ");
  const isSvg = src.endsWith(".svg");

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${flips} ${className}`}
      style={{ width, height }}
    >
      {isSvg ? (
        // Native <img> keeps SVG vectors crisp — next/image can soft-rasterize small icons
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block h-full w-full max-w-none"
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block h-full w-full max-w-none"
          priority={priority}
        />
      )}
    </span>
  );
}
