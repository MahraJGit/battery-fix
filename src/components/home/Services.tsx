import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    id: "01",
    title: "Battery Replacement",
    description: "Professional battery replacement at your location.",
    image: "/figma/services/01.jpg",
    imageRight: true,
  },
  {
    id: "02",
    title: "Battery Testing",
    description: "Professional battery replacement at your location.",
    image: "/figma/services/02.jpg",
    imageRight: false,
  },
  {
    id: "03",
    title: "Jump Start",
    description: "Professional battery replacement at your location.",
    image: "/figma/services/03.jpg",
    imageRight: true,
  },
  {
    id: "04",
    title: "AGM Battery Replacement",
    description: "Professional battery replacement at your location.",
    image: "/figma/services/01.jpg",
    imageRight: false,
  },
] as const;

type ServicesProps = {
  /** Hide “View All Services” when already on the services page */
  showViewAll?: boolean;
};

export function Services({ showViewAll = true }: ServicesProps) {
  return (
    <section id="services" className="bg-[#07080f] px-5 py-[72px] text-white md:px-4 md:py-[112px] lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 md:gap-14">
        <div className="w-full self-start">
          <h2 className="heading-accent-oneline-long">
            <span className="text-[#e87c33]">Battery Services</span>
            <span className="text-[#f0782a]">,</span>
            <span className="text-white"> Wherever You Are.</span>
          </h2>
          <p className="mt-4 max-w-[903px] text-sm leading-normal text-white/60 md:text-base">
            From emergency jump starts to complete battery replacement, our mobile team gets you back
            on the road.
          </p>
        </div>

        <div className="flex w-full flex-col gap-2.5 lg:gap-6">
          {cards.map((service) => (
            <article
              key={service.id}
              className={`relative flex min-h-[145px] overflow-hidden rounded-[24px] bg-[#13172a] sm:min-h-[187px] lg:min-h-[300px] ${
                service.imageRight ? "flex-col sm:flex-row" : "flex-col sm:flex-row-reverse"
              }`}
            >
              <div className="relative z-[1] flex min-w-0 flex-1 flex-col justify-end gap-1 px-3 pb-4 pt-3 sm:px-6 sm:pb-4 lg:gap-4 lg:px-10 lg:pb-6 lg:pt-8">
                <span
                  className={`pointer-events-none absolute top-0 font-display text-[100px] font-bold leading-[0.8] text-[#f0782a]/20 sm:text-[120px] lg:text-[252px] lg:leading-[0.7] ${
                    service.imageRight ? "left-3 lg:left-4" : "right-3 lg:right-4"
                  }`}
                  aria-hidden
                >
                  {service.id}
                </span>
                <h3 className="relative z-[1] font-display text-lg font-semibold leading-tight lg:text-[36px]">
                  {service.title}
                </h3>
                <p className="relative z-[1] max-w-md text-[10px] leading-4 text-white/90 lg:text-base lg:leading-[22.75px]">
                  {service.description}
                </p>
              </div>
              <div className="relative h-[180px] w-full shrink-0 sm:h-auto sm:w-1/2 lg:min-h-[300px] lg:w-[503px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 503px"
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 ${
                    service.imageRight
                      ? "bg-gradient-to-r from-[#13172a] via-[#13172a]/40 to-transparent"
                      : "bg-gradient-to-l from-[#13172a] via-[#13172a]/40 to-transparent"
                  }`}
                />
              </div>
            </article>
          ))}
        </div>

        {showViewAll ? (
          <Link
            href="/services"
            className="inline-flex cursor-pointer items-center justify-center rounded-[6px] bg-[#f0782a] px-8 py-4 font-display text-lg font-medium text-white transition hover:bg-[#d06217]"
          >
            View All Services
          </Link>
        ) : null}
      </div>
    </section>
  );
}
