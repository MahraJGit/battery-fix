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
      className={`absolute z-[2] flex gap-2 rounded-lg bg-white p-3 shadow-[0_4px_16px_rgba(0,0,0,0.1)] ${
        wide ? "w-[288px]" : "w-[266px]"
      } ${className}`}
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#ffede2]">
        <FigmaIcon src={icon} width={32} height={32} />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold leading-[22px] tracking-[-1.1px] text-black">{title}</h3>
        <p className="mt-2 text-sm leading-[17px] tracking-[-1.1px] text-[#8e8e8e]">{description}</p>
      </div>
    </article>
  );
}

export function WhyChooseUs() {
  const [fast, right, install, warranty] = WHY_CHOOSE_ITEMS;

  return (
    <section className="relative overflow-hidden bg-white px-5 py-[72px] md:px-10 md:py-[112px] lg:px-20">
      <div className="pointer-events-none absolute right-0 top-0 hidden opacity-20 lg:block" aria-hidden>
        <FigmaIcon src={`${A}/Vector.svg`} width={219} height={302} />
      </div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-14">
        <h2 className="text-center font-accent text-[40px] leading-[55px] tracking-[-1.1px] text-[#f07828] md:text-[64px]">
          Why Choose Us
        </h2>

        <div className="relative w-full max-w-[1280px]">
          <div className="grid gap-4 lg:hidden">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <article
                key={item.title}
                className="flex gap-2 rounded-lg bg-white p-3 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#ffede2]">
                  <FigmaIcon src={item.icon} width={32} height={32} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#8e8e8e]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative mx-auto hidden h-[484px] w-full max-w-[1280px] lg:block">
            <div className="absolute left-1/2 top-[134px] h-[350px] w-[347px] -translate-x-1/2">
              <FigmaIcon
                src={`${A}/Frame_2147258731.svg`}
                width={630}
                height={484}
                className="pointer-events-none absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-80"
              />
              <div className="absolute left-1/2 top-0 h-[350px] w-[347px] -translate-x-1/2 overflow-hidden rounded-[15px]">
                <Image
                  src={`${A}/Frame_2147258730.png`}
                  alt="Professional battery installation"
                  fill
                  className="object-cover"
                  sizes="347px"
                />
              </div>
            </div>

            <FeatureCard {...fast} className="left-[60px] top-[83px]" />
            <FeatureCard {...right} className="left-[90px] top-[309px]" />
            <FeatureCard {...install} className="left-[956px] top-[129px]" wide />
            <FeatureCard {...warranty} className="left-[956px] top-[379px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
