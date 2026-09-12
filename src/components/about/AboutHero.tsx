import Image from "next/image";
import { FigmaIcon } from "@/components/common/FigmaIcon";
import { SITE } from "@/lib/constants";

export function AboutHero() {
  return (
    <section className="relative flex min-h-[520px] w-full items-center overflow-hidden lg:h-[600px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/figma/about/hero-bg.png"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(45.75% 45.75% at 52.33% 36.86%, rgba(13, 13, 13, 0.7) 0%, #0D0D0D 100%)",
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 py-16 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:gap-[80px] lg:px-20 lg:py-[120px]">
        <h1 className="max-w-[709px] font-display text-[40px] font-medium leading-[1.05] text-white sm:text-[56px] lg:text-[80px] lg:leading-[78px]">
          We Are The <span className="text-[#f0782a]">Mechanics</span> Who
          <br />
          Come To <span className="text-[#f0782a]">You</span>
        </h1>

        <div className="flex w-full max-w-[430px] flex-col items-stretch gap-8 lg:items-end">
          <p
            className="text-left text-lg leading-[29px] text-white lg:text-right"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Born out of frustration with traditional garages, Mechanic Co was built to make car
            repairs simple, transparent and stress free for every car owner.
          </p>
          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:items-stretch lg:w-[408px]">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex h-[61px] flex-1 cursor-pointer items-center justify-center rounded-[34px] bg-[#f97316] px-6 text-lg text-white"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Book a Service
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              className="inline-flex h-[61px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-md border border-white/25 px-4 text-base font-semibold text-white sm:w-[199px]"
            >
              <FigmaIcon src="/figma/about/wa-icon.svg" width={19} height={18} flipY />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
