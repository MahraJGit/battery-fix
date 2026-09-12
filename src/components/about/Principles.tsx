import Image from "next/image";
import { ABOUT_PRINCIPLES } from "@/lib/about-page";

/** Exact Figma principle mark: white 42px disc + orange verified-check glyph */
function PrincipleIcon() {
  return (
    <span className="inline-flex size-[42px] shrink-0 items-center justify-center rounded-full bg-white">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path
          d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15ZM12.4425 5.685L7.5 10.6275L5.5575 8.6925L4.5 9.75L7.5 12.75L13.5 6.75L12.4425 5.685Z"
          fill="#F0782A"
        />
      </svg>
    </span>
  );
}

export function Principles() {
  return (
    <section className="bg-white px-5 py-[72px] md:px-10 md:py-[100px] lg:px-20 lg:py-[112px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[60px]">
        <div className="flex flex-col gap-[15px]">
          <h2 className="max-w-[1074px] font-accent text-[36px] leading-[1.15] text-[#242424] sm:text-[48px] lg:text-[56px] lg:leading-[64px]">
            Principles That Drive Everything We Do.
          </h2>
          <p
            className="max-w-[1280px] text-lg leading-[29px] text-[#565656]"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            From the moment you book to the moment we drive away, Every decision we make is guided
            by the same set of values speed, honesty, quality and care.
          </p>
        </div>

        <div className="flex flex-wrap content-center items-center gap-6">
          {ABOUT_PRINCIPLES.map((card) => (
            <article
              key={card.title}
              className="relative h-[230px] w-full overflow-hidden rounded-xl border border-[#222] sm:w-[calc(50%-12px)] lg:w-[394px]"
            >
              <Image
                src={card.image}
                alt=""
                fill
                sizes="394px"
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-[#f0782a]" aria-hidden />
              <div className="absolute inset-x-0 top-[8%] bottom-[8%] flex flex-col justify-center gap-3 p-4">
                <div className="flex w-full items-center gap-2.5">
                  <PrincipleIcon />
                  <div className="h-px flex-1 bg-white/45" />
                </div>
                <div className="relative w-full">
                  <h4 className="text-[28px] font-bold leading-9 text-white">{card.title}</h4>
                  <p className="mt-[11px] text-lg leading-[29px] text-white">{card.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
