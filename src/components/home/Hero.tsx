import { FigmaIcon } from "@/components/common/FigmaIcon";
import { SITE } from "@/lib/constants";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-auto min-h-[640px] w-full overflow-hidden bg-black text-white md:h-[814px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src="/figma/hero/bg-b.png" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/figma/hero/bg-c.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center]"
          />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/figma/hero/bg-d.png" alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black from-[32%] via-black/55 via-[52%] to-transparent to-[74%]" />
      </div>

      <div className="pointer-events-none absolute left-[29.1%] top-[21.1%] z-[2] hidden lg:block" aria-hidden>
        <div
          className="flex size-20 rotate-[25.42deg] items-center justify-center rounded-2xl border border-white/[0.14] shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          style={{
            backgroundImage:
              "linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.02))",
          }}
        >
          <FigmaIcon src="/figma/hero/tile-wrench.svg" width={31} height={31} />
        </div>
      </div>
      <div className="pointer-events-none absolute left-[67.4%] top-[15.7%] z-[2] hidden md:block" aria-hidden>
        <div
          className="flex size-[72px] rotate-[27.65deg] items-center justify-center rounded-2xl border border-white/[0.14] shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          style={{
            backgroundImage:
              "linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.02))",
          }}
        >
          <FigmaIcon src="/figma/hero/tile-battery.svg" width={31} height={31} />
        </div>
      </div>
      <div className="pointer-events-none absolute left-[35.7%] top-[73.5%] z-[2] hidden md:block" aria-hidden>
        <div
          className="flex size-[72px] -rotate-[5.94deg] items-center justify-center rounded-2xl border border-white/[0.14] shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          style={{
            backgroundImage:
              "linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.02))",
          }}
        >
          <FigmaIcon src="/figma/hero/tile-bolt.svg" width={31} height={31} />
        </div>
      </div>

      <div className="relative z-[1] mx-auto flex h-full min-h-[640px] w-full max-w-[1440px] items-center px-5 py-24 md:min-h-[814px] md:px-[81px] md:py-0">
        <div className="flex w-full max-w-[743px] flex-col gap-[34px]">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-display text-[40px] font-bold tracking-[-0.025em] text-white sm:text-[56px] lg:text-[72px] lg:leading-[72px]">
              Dead Battery?
              <span className="block text-[#f0782a]">We Come To You.</span>
            </h1>
            <p className="text-lg leading-7 text-white/75">{SITE.tagline}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex h-[60px] w-full items-center justify-center gap-2.5 rounded-[6px] bg-[#f0782a] text-base font-semibold text-white sm:w-[176px]"
            >
              <FigmaIcon src="/figma/hero/btn-phone.svg" width={19} height={18} />
              CALL NOW
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              className="inline-flex h-[62px] w-full items-center justify-center gap-2.5 rounded-[6px] border border-white/25 bg-transparent text-base font-semibold text-white sm:w-[199px]"
            >
              <FigmaIcon src="/figma/hero/btn-wa.svg" width={19} height={18} flipY />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
