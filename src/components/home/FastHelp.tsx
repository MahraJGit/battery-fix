import Image from "next/image";
import { FigmaIcon } from "@/components/common/FigmaIcon";

const cards = [
  {
    title: "24/7 Mobile Service",
    description: "Day or night, we come to you.",
    icon: "/figma/fast-help/icon-clock.svg",
    watermark: "/figma/fast-help/wm-clock.svg",
  },
  {
    title: "Fast Response",
    description: "Quick arrival when you need it most.",
    icon: "/figma/fast-help/icon-gauge.svg",
    watermark: "/figma/fast-help/wm-gauge.svg",
  },
  {
    title: "Professional Technicians",
    description: "Trained experts you can rely on.",
    icon: "/figma/fast-help/icon-team.svg",
    watermark: "/figma/fast-help/wm-team.svg",
  },
  {
    title: "Warranty-Backed Service",
    description: "Covered work for total peace of mind.",
    icon: "/figma/fast-help/icon-shield.svg",
    watermark: "/figma/fast-help/wm-shield.svg",
  },
] as const;

export function FastHelp() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-[112px] lg:px-20">
        {/* Peach bolt watermark */}
        <div
          className="pointer-events-none absolute right-[18%] top-10 hidden h-[311px] w-[232px] lg:block"
          aria-hidden
        >
          <Image src="/figma/fast-help/bolt.svg" alt="" fill className="object-contain opacity-90" />
        </div>

        {/* Technician cutout — overlaps cards */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 z-[3] hidden h-[560px] w-[380px] lg:block xl:h-[640px] xl:w-[420px]"
          aria-hidden
        >
          <Image
            src="/figma/fast-help/technician.png"
            alt=""
            fill
            sizes="420px"
            className="object-contain object-bottom"
          />
        </div>

        <div className="relative z-[1] max-w-[672px]">
          <h2 className="font-accent text-[40px] leading-[1.1] tracking-[-0.02em] md:text-[64px] md:leading-[55px]">
            <span className="text-[#f07828]">Fast Help </span>
            <span className="text-black">When You Need It.</span>
          </h2>
          <p className="mt-4 max-w-[672px] text-lg leading-7 text-[#596475]">
            When your battery fails, you shouldn&apos;t have to wait. Our mobile technicians come
            directly to your location.
          </p>
        </div>

        <div className="relative z-[2] mt-14 grid max-w-[1100px] gap-px overflow-hidden rounded-2xl bg-[#eeeff0] sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <article key={card.title} className="relative overflow-hidden bg-[#fdf2eb] p-8">
              <span className="pointer-events-none absolute -right-1 -top-2" aria-hidden>
                <Image src={card.watermark} alt="" width={85} height={85} />
              </span>
              <div className="relative z-[1] mb-4 flex h-12 w-12 items-center justify-center rounded-[6px] bg-[#f07828]">
                <FigmaIcon src={card.icon} width={25} height={24} />
              </div>
              <h3 className="relative z-[1] font-display text-lg font-semibold text-[#242424]">
                {card.title}
              </h3>
              <p className="relative z-[1] mt-4 text-sm leading-5 text-[#687386]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
