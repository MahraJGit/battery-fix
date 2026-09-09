import Image from "next/image";
import { FigmaIcon } from "@/components/common/FigmaIcon";

const cards = [
  {
    title: "24/7 Mobile Service",
    description: "Day or night, we come to you.",
    icon: "/figma/fast-help/icon-clock.svg",
    watermark: "/figma/fast-help/wm-clock.svg",
    watermarkStyle: { left: 223, top: -11, width: 85, height: 85 },
    radius: "rounded-2xl lg:rounded-l-2xl lg:rounded-r-none",
  },
  {
    title: "Fast Response",
    description: "Quick arrival when you need it most.",
    icon: "/figma/fast-help/icon-gauge.svg",
    watermark: "/figma/fast-help/wm-gauge.svg",
    watermarkStyle: { left: 226.75, top: -8, width: 85, height: 73 },
    radius: "rounded-2xl",
  },
  {
    title: "Professional Technicians",
    description: "Trained experts you can rely on.",
    icon: "/figma/fast-help/icon-team.svg",
    watermark: "/figma/fast-help/wm-team.svg",
    watermarkStyle: { left: 221.5, top: -19, width: 85, height: 85 },
    radius: "rounded-2xl",
  },
  {
    title: "Warranty-Backed Service",
    description: "Covered work for total peace of mind.",
    icon: "/figma/fast-help/icon-shield.svg",
    watermark: "/figma/fast-help/wm-shield.svg",
    watermarkStyle: { left: 221.25, top: -12, width: 85, height: 104 },
    radius: "rounded-2xl lg:rounded-r-2xl lg:rounded-l-none",
  },
] as const;

export function FastHelp() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Section: 1440×620, padding 0 80px */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-stretch px-5 md:px-10 lg:h-[620px] lg:overflow-hidden lg:px-20">
        {/*
          Technician: 514×640, top 8px, right 0. z-index 0 — behind cards.
        */}
        <div
          className="pointer-events-none absolute top-2 right-0 z-0 hidden h-[520px] w-[400px] lg:block xl:h-[640px] xl:w-[514px]"
          aria-hidden
        >
          <Image
            src="/figma/fast-help/technician.png"
            alt=""
            fill
            sizes="514px"
            className="object-cover object-[center_top]"
            priority={false}
          />
        </div>

        <div
          className="pointer-events-none absolute bottom-0 right-0 z-0 hidden h-[400px] w-[280px] md:block lg:hidden"
          aria-hidden
        >
          <Image
            src="/figma/fast-help/technician.png"
            alt=""
            fill
            sizes="280px"
            className="object-cover object-[center_top]"
          />
        </div>

        {/* Container: padding 112×24, gap 56, 1280×620, z-index 1 */}
        <div className="relative z-[1] mx-auto flex h-full w-full max-w-[1280px] flex-col items-start gap-10 py-14 lg:gap-14 lg:px-6 lg:py-[112px]">
          {/* Vector bolt: left 793, top -9, 219×302 */}
          <div
            className="pointer-events-none absolute z-0 hidden lg:block"
            style={{ left: 793, top: -9, width: 219.34, height: 301.59 }}
            aria-hidden
          >
            <Image
              src="/figma/fast-help/bolt.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Heading + body: 672px, gap 16px */}
          <div className="relative z-[1] flex w-full max-w-[672px] flex-col items-start gap-4">
            <h2 className="flex items-center font-accent text-[clamp(2rem,4.2vw,4rem)] leading-[1.05] tracking-[-1.1px] max-lg:whitespace-normal lg:h-[55px] lg:w-[772px] lg:max-w-none lg:whitespace-nowrap lg:text-[64px] lg:leading-[55px]">
              <span>
                <span className="text-[#f07828]">Fast Help </span>
                <span className="text-black">When You Need It.</span>
              </span>
            </h2>
            <p className="flex w-full max-w-[672px] items-center text-base leading-7 text-[#596475] md:text-lg md:leading-7 lg:h-14">
              When your battery fails, you shouldn&apos;t have to wait. Our mobile technicians come
              directly to your location.
            </p>
          </div>

          {/* HorizontalBorder: 1232×213, gap 16px, border-top, z-index 2 */}
          <div className="relative z-[2] flex w-full max-w-[1232px] flex-col gap-4 border-t border-[#eeeff0] sm:grid sm:grid-cols-2 lg:flex lg:h-[213px] lg:flex-row lg:items-start lg:justify-center lg:gap-4">
            {cards.map((card) => (
              <article
                key={card.title}
                className={`relative isolate flex w-full flex-col items-start gap-4 overflow-hidden bg-[#fdf2eb] p-8 lg:h-[212px] lg:min-w-0 lg:flex-1 ${card.radius}`}
              >
                <span
                  className="pointer-events-none absolute z-[3] hidden lg:block"
                  style={card.watermarkStyle}
                  aria-hidden
                >
                  <Image
                    src={card.watermark}
                    alt=""
                    width={card.watermarkStyle.width}
                    height={card.watermarkStyle.height}
                    className="max-w-none"
                  />
                </span>
                <span
                  className="pointer-events-none absolute -right-1 -top-3 z-[3] lg:hidden"
                  aria-hidden
                >
                  <Image src={card.watermark} alt="" width={85} height={85} />
                </span>

                <div className="relative z-0 flex size-12 shrink-0 items-center justify-center rounded-[6px] bg-[#f07828]">
                  <FigmaIcon src={card.icon} width={25} height={24} />
                </div>

                <h3 className="relative z-[1] font-display text-lg font-semibold leading-7 text-[#242424]">
                  {card.title}
                </h3>
                <p className="relative z-[2] text-sm leading-5 text-[#687386]">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
