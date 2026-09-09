import Image from "next/image";
import { FigmaIcon } from "@/components/common/FigmaIcon";
import { SITE } from "@/lib/constants";

const A = "/figma/services-page";

const glass =
  "linear-gradient(145deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.02) 100%)";
const glassShadow =
  "0px 10px 30px rgba(0,0,0,0.4), inset 0px 1px 0px 1px rgba(255,255,255,0.25), inset 0px -2px 4px 1px rgba(0,0,0,0.35)";

/** 2x assets so 84px avatars stay sharp on retina */
const HERO_AVATARS = [
  "/figma/testimonials/avatar1.png",
  "/figma/testimonials/avatar2.png",
  "/figma/testimonials/avatar3.png",
] as const;

function GlassTile({
  icon,
  size,
  className = "",
}: {
  icon: string;
  size: number;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-white/[0.14] ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: glass,
        boxShadow: glassShadow,
      }}
    >
      <FigmaIcon src={icon} width={31} height={31} />
    </div>
  );
}

export function ServicesHero() {
  return (
    <section className="relative -mt-20 flex min-h-svh w-full items-center overflow-hidden bg-[#d9d9d9] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={`${A}/Subtract.png`}
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.7) 30.1%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Crisp floating tiles (CSS glass + vector icons — avoids blurry Figma SVG exports) */}
      <div className="pointer-events-none absolute left-[54px] top-[18%] z-[2] hidden md:block" aria-hidden>
        <GlassTile icon="/figma/hero/tile-bolt.svg" size={72} className="-rotate-[5.94deg]" />
      </div>
      <div className="pointer-events-none absolute bottom-[14%] left-[75px] z-[2] hidden md:block" aria-hidden>
        <GlassTile
          icon="/figma/hero/tile-battery.svg"
          size={72}
          className="[transform:matrix(-0.98,0.18,0.18,0.98,0,0)]"
        />
      </div>
      <div className="pointer-events-none absolute bottom-[12%] left-[22%] z-[2] hidden lg:block" aria-hidden>
        <GlassTile icon="/figma/hero/tile-wrench.svg" size={80} className="rotate-[25.42deg]" />
      </div>

      {/* Main copy — vertically centered */}
      <div className="relative z-[1] mx-auto flex w-full max-w-[1440px] items-center px-5 py-8 md:px-10 lg:px-20">
        <div className="flex max-w-[765px] flex-col pb-40 lg:pb-0">
          <p className="font-display text-lg font-semibold leading-7 text-[#f07828]">
            24/7 CAR BATTERY SERVICE
          </p>
          <h1 className="mt-2.5 font-display text-[36px] font-semibold leading-[1.05] text-white sm:text-[48px] lg:text-[64px] lg:leading-[62px]">
            Complete Battery Care, Wherever You Are.
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex h-[60px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#f0782a] text-base font-semibold text-white sm:w-[176px]"
            >
              <FigmaIcon src={`${A}/Icon.svg`} width={19} height={18} />
              CALL NOW
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              className="inline-flex h-[62px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border border-white/25 text-base font-semibold text-white sm:w-[199px]"
            >
              <FigmaIcon src={`${A}/Icon_2.svg`} width={19} height={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Social proof — bottom aligned like Figma */}
      <div className="absolute bottom-8 left-5 z-[2] w-[calc(100%-2.5rem)] max-w-[520px] md:bottom-10 md:left-auto md:right-10 lg:bottom-12 lg:right-20 lg:max-w-[560px] xl:max-w-[640px]">
        <p className="mb-4 font-display text-xl font-bold uppercase leading-7 text-white">
          Working since 50 years
        </p>
        <div
          className="flex min-h-[160px] items-center gap-4 overflow-hidden rounded-2xl border border-white/[0.14] px-5 py-6 backdrop-blur-[12px] lg:min-h-[200px] lg:gap-6 lg:px-6"
          style={{ backgroundImage: glass, boxShadow: glassShadow }}
        >
          <div className="flex shrink-0 -space-x-3 lg:-space-x-4">
            {HERO_AVATARS.map((src) => (
              <div
                key={src}
                className="relative size-14 overflow-hidden rounded-full border border-white lg:size-[84px]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  quality={95}
                  sizes="(min-width: 1024px) 168px, 112px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <p className="font-display text-[32px] font-bold uppercase leading-7 text-white lg:text-[40px]">
              10k
            </p>
            <p className="mt-1 font-display text-base font-bold capitalize text-white lg:text-xl lg:leading-[30px]">
              Satisfied customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
