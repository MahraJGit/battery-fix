import Image from "next/image";
import { FigmaIcon } from "@/components/common/FigmaIcon";
import { WHY_CHOOSE_ITEMS } from "@/lib/services-page";

const A = "/figma/services-page";

function FeatureCard({
  title,
  description,
  icon,
  className,
  wide,
}: {
  title: string;
  description: string;
  icon: string;
  className: string;
  wide?: boolean;
}) {
  return (
    <article
      className={`absolute z-[3] flex items-start gap-2 rounded-lg bg-white px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.1)] ${
        wide ? "h-[122px] w-[288px]" : "h-[105px] w-[266px]"
      } ${className}`}
    >
      <div className="relative flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#ffede2]">
        <FigmaIcon src={icon} width={32} height={32} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <h3 className="text-lg font-semibold leading-[22px] tracking-[-1.1px] text-black">{title}</h3>
        <p className="text-sm leading-[17px] tracking-[-1.1px] text-[#8e8e8e]">{description}</p>
      </div>
    </article>
  );
}

export function WhyChooseUs() {
  const [fast, right, install, warranty] = WHY_CHOOSE_ITEMS;

  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-[72px] md:px-10 md:py-[112px] lg:px-0">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-14">
        {/* Lightning bolt — Figma Vector @ left 1170 / top -11 */}
        <div
          className="pointer-events-none absolute z-0 hidden lg:block"
          style={{
            width: 219.34,
            height: 301.59,
            left: "calc(50% - 640px + 1170px)",
            top: -11.32,
            opacity: 0.2,
            transform: "matrix(1, -0.01, -0.01, -1, 0, 0)",
          }}
          aria-hidden
        >
          <FigmaIcon src={`${A}/Vector.svg`} width={219} height={302} />
        </div>

        <div className="relative z-[1] flex w-full max-w-[672px] flex-col items-center gap-4">
          <h2 className="font-accent text-[40px] leading-[55px] tracking-[-1.1px] md:text-[64px]">
            <span className="text-black">Why </span>
            <span className="text-[#f07828]">Choose Us</span>
          </h2>
        </div>

        {/* Mobile stack */}
        <div className="relative z-[2] grid w-full gap-4 lg:hidden">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <article
              key={item.title}
              className="flex gap-2 rounded-lg bg-white p-3 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#ffede2]">
                <FigmaIcon src={item.icon} width={32} height={32} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold leading-[22px] tracking-[-1.1px] text-black">
                  {item.title}
                </h3>
                <p className="text-sm leading-[17px] tracking-[-1.1px] text-[#8e8e8e]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop composition — 1280 × 483.52 per Figma */}
        <div className="relative z-[2] mx-auto hidden h-[483.52px] w-full max-w-[1280px] lg:block">
          {/* Diagonal stripe panel behind photo (left 576.64, top 133.65) */}
          <div
            className="pointer-events-none absolute overflow-hidden rounded-3xl"
            style={{ left: 576.64, top: 133.65, width: 347.36, height: 349.88 }}
            aria-hidden
          >
            <FigmaIcon
              src={`${A}/Frame_2147258731.svg`}
              width={630}
              height={484}
              className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          {/* Center photo (left 356, top 0) */}
          <div
            className="absolute z-[1] overflow-hidden rounded-[15.13px] bg-white"
            style={{ left: 356, top: 0, width: 347.36, height: 349.88 }}
          >
            <Image
              src={`${A}/Frame_2147258730.png`}
              alt="Professional battery installation"
              fill
              className="object-cover"
              sizes="347px"
              quality={90}
            />
          </div>

          <FeatureCard {...fast} className="left-[60px] top-[82.68px]" />
          <FeatureCard {...right} className="left-[90px] top-[309px]" />
          <FeatureCard {...install} className="left-[956px] top-[128.68px]" wide />
          <FeatureCard {...warranty} className="left-[956px] top-[378.68px] rounded-lg" />
        </div>
      </div>
    </section>
  );
}
