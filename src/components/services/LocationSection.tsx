import Image from "next/image";
import { FigmaIcon } from "@/components/common/FigmaIcon";
import { LOCATION_TAGS } from "@/lib/services-page";

const A = "/figma/services-page";

export function LocationSection() {
  return (
    <section className="bg-black px-5 py-20 text-white md:px-10 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-14">
        <div className="flex w-full max-w-[706px] flex-col gap-[42px]">
          <div className="flex max-w-[448px] flex-col gap-[19px]">
            <h2 className="font-accent text-[40px] leading-[48px] tracking-[-1.2px] text-white md:text-[48px]">
              Your location.
              <br />
              Our <span className="text-[#f07828]">technician.</span>
            </h2>
            <p className="text-lg leading-[22px] text-white">
              Whether you&apos;re at home, at work, in a parking lot, or stuck roadside, our mobile
              technicians come directly to you.
            </p>
          </div>

          <ul className="flex flex-wrap gap-3">
            {LOCATION_TAGS.map((tag) => (
              <li
                key={tag.label}
                className="inline-flex h-[38px] items-center gap-2 rounded-full border border-[#eae6dc] px-4"
              >
                <FigmaIcon src={tag.icon} width={16} height={15} />
                <span className="font-[family-name:var(--font-manrope)] text-sm font-medium leading-5 text-white">
                  {tag.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-[24px] lg:h-[547px] lg:w-[574px] lg:flex-1">
          <Image
            src={`${A}/Mobile_battery_service_van_in_Dubai.png`}
            alt="Mobile battery service van in Dubai"
            fill
            sizes="(max-width: 1024px) 100vw, 574px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
