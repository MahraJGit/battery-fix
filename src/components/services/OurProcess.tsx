import Image from "next/image";
import { PROCESS_STEPS } from "@/lib/services-page";

const A = "/figma/services-page";

export function OurProcess() {
  return (
    <section className="bg-black px-5 py-20 text-white md:px-10 md:py-20 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-14">
        <h2 className="text-center font-accent text-[40px] leading-[55px] tracking-[-1.1px] md:text-[64px]">
          <span className="text-white">Our </span>
          <span className="text-[#f07828]">Process</span>
        </h2>

        <ol className="relative mx-auto w-full max-w-[1104px] lg:h-[1056px]">
          {/*
            Figma Vectors 3/4/5 — positions from design CSS.
            Vector_4’s Figma rotate is already baked into export intent as L→R
            connector between steps 2–3; do not re-rotate or paths cross.
          */}
          <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-visible lg:block" aria-hidden>
            <Image
              src={`${A}/Vector_3.svg`}
              alt=""
              width={543}
              height={274}
              unoptimized
              className="absolute max-w-none"
              style={{ left: -23, top: 10.64, width: 543, height: 273.86 }}
            />
            <Image
              src={`${A}/Vector_4.svg`}
              alt=""
              width={546}
              height={278}
              unoptimized
              className="absolute max-w-none"
              style={{ left: -23, top: 280, width: 543, height: 274 }}
            />
            <Image
              src={`${A}/Vector_5.svg`}
              alt=""
              width={558}
              height={272}
              unoptimized
              className="absolute max-w-none"
              style={{ left: -22.5, top: 566, width: 557.79, height: 272 }}
            />
          </div>

          {PROCESS_STEPS.map((step, index) => {
            const tops = [0, 276, 552.16, 828] as const;
            const isRight = step.align === "right";

            return (
              <li
                key={step.id}
                className={`relative z-[1] mb-10 w-full lg:absolute lg:mb-0 lg:h-[228px] lg:w-1/2 ${
                  isRight ? "lg:left-1/2" : "lg:left-0"
                }`}
                style={{ top: tops[index] }}
              >
                <span
                  className="absolute -left-[30px] top-0 z-[3] hidden size-4 rounded-full bg-[#f0782a] lg:block"
                  aria-hidden
                />

                <article className="relative h-full overflow-hidden rounded-xl bg-[#181818] p-6 lg:mr-12">
                  <span
                    className="pointer-events-none absolute select-none font-display text-[140px] font-bold leading-none opacity-20 sm:text-[200px] lg:right-[-7px] lg:top-0 lg:text-[251.74px] lg:leading-[302px]"
                    style={{
                      backgroundImage: "linear-gradient(180deg, #F0782A 42.57%, #171717 68.65%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    aria-hidden
                  >
                    {step.id}
                  </span>

                  <h3 className="relative z-[1] text-2xl font-semibold leading-[29px] text-white">
                    {step.title}
                  </h3>
                  <p className="relative z-[1] mt-[15px] max-w-[440px] pr-6 text-base leading-[19px] text-white">
                    {step.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
