import Image from "next/image";

type FigmaIconProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
  /**
   * Some Figma MCP vector exports are vertically inverted in the SVG file.
   * Default false — only enable when the asset is visibly upside-down.
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

  return (
    <span
      className={`inline-flex items-center justify-center ${flips} ${className}`}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="block h-full w-full max-w-none"
        priority={priority}
      />
    </span>
  );
}
