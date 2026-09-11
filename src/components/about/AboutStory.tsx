import Image from "next/image";
import { SITE } from "@/lib/constants";

export function AboutStory() {
  return (
    <section className="bg-black px-5 py-14 text-white md:px-10 md:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 lg:flex-row lg:gap-8">
        <div className="relative h-[320px] w-full overflow-hidden rounded-3xl sm:h-[420px] lg:h-[516px] lg:min-w-0 lg:flex-1">
          <Image
            src="/figma/about/Mobile_battery_service_van_in_Dubai.png"
            alt="Mobile battery service van in Dubai"
            fill
            sizes="(min-width: 1024px) 542px, 100vw"
            className="object-cover object-[30%_center]"
            quality={90}
          />
        </div>

        <div className="flex w-full max-w-[706px] flex-col gap-[42px] lg:shrink-0">
          <div className="flex flex-col gap-[19px]">
            <h2 className="font-accent text-[36px] leading-[1.15] tracking-[-1.2px] sm:text-[48px] sm:leading-[60px]">
              A problem we experienced ourselves
            </h2>
            <div
              className="space-y-[19px] text-lg leading-[29px] text-white"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              <p>
                It started with a broken down car, a long tow truck wait, and an overpriced garage
                bill. Our founder Marcus Williams spent 3 hours on the side of a highway waiting for
                help that took too long and cost too much.
              </p>
              <p>
                That frustrating experience became the spark. Marcus gathered a team of certified
                mechanics and built Mechanic Co around one simple idea — bring the garage to the
                customer, not the other way around.
              </p>
              <p>
                Today we serve hundreds of car owners across the city, offering fast, honest and
                affordable mobile mechanic services right at their doorstep.
              </p>
            </div>
          </div>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex h-[61px] w-fit cursor-pointer items-center justify-center rounded-[34px] bg-[#f97316] px-6 text-lg font-semibold text-white"
          >
            Book a Service
          </a>
        </div>
      </div>
    </section>
  );
}
