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
    <section id="about" className="relative overflow-hidden bg-white px-5 py-[72px] md:px-10 md:py-[112px] lg:px-20">
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 lg:flex-row lg:gap-8">
        <div className="relative w-full overflow-hidden rounded-[24px] lg:flex-1">
          <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:h-[540px]">
            <Image
              src="/figma/why/photo.png"
              alt="Technician installing a car battery"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full shrink-0 pt-2 lg:w-[692px]">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-px w-8 bg-brand" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark">
              Why Battery Fix
            </p>
          </div>

          <h2 className="font-accent text-[42px] leading-[1.05] tracking-[-0.02em] text-ink md:text-[74px] md:leading-[67px]">
            <span className="text-[#e87c33]">More Than</span>
            <span> A Battery Replacement.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted md:text-lg">
            We make getting back on the road simple, reliable and convenient — with professional
            service delivered directly to you.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex h-[45px] items-center gap-3 rounded-lg bg-gradient-to-r from-brand to-white p-2"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                  <FigmaIcon src={feature.icon} width={16} height={16} />
                </span>
                <p className="text-sm font-medium text-[#11172a]">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
