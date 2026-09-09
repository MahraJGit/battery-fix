import Image from "next/image";
import { FigmaIcon } from "@/components/common/FigmaIcon";

const features = [
  { title: "24/7 Emergency Support", icon: "/figma/why/i1.svg" },
  { title: "Professional Technicians", icon: "/figma/why/i2.svg" },
  { title: "Genuine Battery Brands", icon: "/figma/why/i3.svg" },
  { title: "Free Installation", icon: "/figma/why/i4.svg" },
  { title: "Warranty Included", icon: "/figma/why/i5.svg" },
  { title: "Service At Your Location", icon: "/figma/why/i6.svg" },
] as const;

export function WhyUs() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white px-5 py-[72px] md:px-10 md:py-[112px] lg:px-20"
    >
      {/* Vector 2 — orange glow */}
      <div
        className="pointer-events-none absolute z-0 h-[716.33px] w-[565.92px] bg-[#f0782a] blur-[125px]"
        style={{ left: -526, top: 376, transform: "rotate(38.2deg)" }}
        aria-hidden
      />

      {/* 3005 — geometric frames (mirrored; hangs past right edge) */}
      <div
        className="pointer-events-none absolute top-[-8px] right-[-124px] z-[2] hidden h-[192.71px] w-[248px] opacity-[0.14] lg:block"
        style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}
        aria-hidden
      >
        <div
          className="absolute rounded-[3.89px] border-[5.835px] border-[#e87c33]"
          style={{ left: "44.59%", right: 0, top: "16.39%", bottom: "23.77%" }}
        />
        <div
          className="absolute rounded-[3.89px] border-[7.78px] border-[#e87c33]"
          style={{ left: "31.85%", right: "12.74%", top: 0, bottom: "40.16%" }}
        />
        <div
          className="absolute rounded-[3.89px] border-[5.835px] border-[#e87c33]"
          style={{ left: 0, right: "44.59%", top: "40.16%", bottom: 0 }}
        />
      </div>

      <div className="relative z-[1] mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 lg:h-[540px] lg:flex-row lg:gap-8">
        <div className="relative h-[320px] w-full overflow-hidden rounded-[24px] sm:h-[420px] lg:h-[540px] lg:w-[556px] lg:flex-1">
          <Image
            src="/figma/why/photo.png"
            alt="Technician installing a new car battery into a modern vehicle engine bay"
            fill
            sizes="(max-width: 1024px) 100vw, 556px"
            className="object-cover object-center"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-5 pt-[9px] lg:h-[470px] lg:w-[692px] lg:shrink-0">
          <div className="flex h-4 items-center gap-2">
            <span className="h-px w-8 shrink-0 bg-[#f0782a]" aria-hidden />
            <p className="text-xs font-semibold uppercase leading-4 tracking-[2.16px] text-[#d06217]">
              Why Battery Fix
            </p>
          </div>

          <h2 className="flex w-full items-center font-accent text-[42px] leading-[1.05] tracking-[-1.1px] md:h-[134px] md:text-[74px] md:leading-[67px]">
            <span>
              <span className="text-[#e87c33]">More Than</span>
              <span className="text-[#11172a]"> A Battery Replacement.</span>
            </span>
          </h2>

          <p className="flex w-full items-center text-lg leading-7 text-[#596475] md:h-14">
            We make getting back on the road simple, reliable and convenient — with professional
            service delivered directly to you.
          </p>

          {/* 692×195 feature area — 2×3, 32px column gap, 20px row gap, 20px top inset */}
          <div className="grid w-full grid-cols-1 gap-x-8 gap-y-5 pt-5 sm:grid-cols-2 lg:h-[195px] lg:pt-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex h-[45px] items-center gap-3 rounded-lg bg-white p-2"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #F0782A 0%, #FFFFFF 97.01%), linear-gradient(#FFFFFF, #FFFFFF)",
                }}
              >
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-white">
                  <FigmaIcon src={feature.icon} width={16} height={16} />
                </span>
                <p className="text-sm font-medium leading-5 text-[#11172a]">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
