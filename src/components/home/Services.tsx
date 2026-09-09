import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

const cards = [
  {
    id: "01",
    title: SERVICES[0].title,
    description: SERVICES[0].description,
    image: "/figma/services/01.jpg",
    imageRight: true,
  },
  {
    id: "02",
    title: SERVICES[1].title,
    description: SERVICES[1].description,
    image: "/figma/services/02.jpg",
    imageRight: false,
  },
  {
    id: "03",
    title: SERVICES[2].title,
    description: SERVICES[2].description,
    image: "/figma/services/03.jpg",
    imageRight: true,
  },
  {
    id: "04",
    title: SERVICES[3].title,
    description: SERVICES[3].description,
    image: "/figma/services/01.jpg",
    imageRight: false,
  },
] as const;

export function Services() {
  return (
    <section id="services" className="bg-[#07080f] px-5 py-[72px] text-white md:px-10 md:py-[112px] lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-14">
        <div className="w-full max-w-[903px] self-start">
          <h2 className="font-accent text-[40px] leading-[1.1] tracking-[-0.02em] md:text-[64px] md:leading-[55px]">
            <span className="text-[#e87c33]">Battery Services</span>
            <span className="text-[#f0782a]">,</span>
            <span className="text-white"> Wherever You Are.</span>
          </h2>
          <p className="mt-4 text-base leading-normal text-white/60">
            From emergency jump starts to complete battery replacement, our mobile team gets you back
            on the road.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6">
          {cards.map((service) => (
            <article
              key={service.id}
              className={`relative flex min-h-[300px] overflow-hidden rounded-[24px] bg-[#13172a] ${
                service.imageRight ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
              }`}
            >
              <div className="relative z-[1] flex flex-1 flex-col justify-end gap-6 px-6 pb-10 pt-8 lg:px-10">
                <span
                  className={`pointer-events-none absolute top-1/2 -translate-y-1/2 font-display text-[120px] font-bold leading-none text-[#f0782a]/20 md:text-[180px] lg:text-[252px] ${
                    service.imageRight ? "left-4" : "right-4"
                  }`}
                  aria-hidden
                >
                  {service.id}
                </span>
                <h3 className="relative z-[1] font-display text-[28px] font-semibold leading-none md:text-[36px]">
                  {service.title}
                </h3>
                <p className="relative z-[1] max-w-md text-base leading-[22.75px] text-white/90">
                  {service.description}
                </p>
              </div>
              <div className="relative h-[220px] w-full shrink-0 lg:h-auto lg:min-h-[300px] lg:w-[503px]">
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

        <Link
          href="/#services"
          className="inline-flex items-center justify-center rounded-[6px] bg-[#f0782a] px-8 py-4 font-display text-lg font-medium text-white transition hover:bg-[#d06217]"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
