import Image from "next/image";
import { PROCESS_STEPS } from "@/lib/services-page";

const A = "/figma/services-page";

export function OurProcess() {
  return (
    <section className="bg-black px-5 py-20 text-white md:px-10 md:py-20 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-14">
        <h2 className="font-accent text-[40px] leading-[55px] tracking-[-1.1px] text-[#f07828] md:text-[64px]">
          Our Process
        </h2>

        <ol className="relative mx-auto flex w-full max-w-[1104px] flex-col gap-12 lg:min-h-[1056px] lg:gap-0">
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
            <Image
              src={`${A}/Vector_4.svg`}
              alt=""
              width={566}
              height={225}
              className="absolute left-[-23px] top-[142px]"
            />
            <Image
              src={`${A}/Vector_3.svg`}
              alt=""
              width={543}
              height={274}
              className="absolute left-[-23px] top-[11px]"
            />
            <Image
              src={`${A}/Vector_5.svg`}
              alt=""
              width={558}
              height={272}
              className="absolute left-[-22px] top-[566px]"
            />
          </div>

          {PROCESS_STEPS.map((step, index) => {
            const tops = [0, 276, 552, 828];
            const isRight = step.align === "right";
            return (
              <li
                key={step.id}
                className={`relative w-full lg:absolute lg:w-1/2 ${
                  isRight ? "lg:left-1/2" : "lg:left-0"
                }`}
                style={{ top: tops[index] }}
              >
                <span
                  className="absolute -left-[30px] top-0 hidden size-4 rounded-full bg-[#f0782a] lg:block"
                  aria-hidden
                />
                <article className="relative mr-0 overflow-hidden rounded-xl bg-[#181818] p-6 md:mr-12 md:min-h-[228px]">
                  <span
                    className="pointer-events-none absolute -right-2 top-0 select-none font-display text-[120px] font-bold leading-none opacity-20 md:text-[200px] lg:text-[252px]"
                    style={{
                      backgroundImage: "linear-gradient(180deg, #F0782A 42.57%, #171717 68.65%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    aria-hidden
                  >
                    {step.id}
                  </span>
                  <h3 className="relative z-[1] text-2xl font-semibold leading-[29px] text-white">
                    {step.title}
                  </h3>
                  <p className="relative z-[1] mt-4 max-w-[440px] text-base leading-[19px] text-white">
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
