import Image from "next/image";
import { WHAT_YOU_GET } from "@/lib/services-page";

export function WhatYouGet() {
  return (
    <section className="bg-[#ffede2] px-5 py-[72px] md:px-10 md:py-[112px] lg:px-20">
      <div className="mx-auto w-full max-w-[1280px] overflow-hidden rounded-[40px] bg-white md:rounded-tl-[100px] md:rounded-tr-none md:rounded-br-[100px] md:rounded-bl-none">
        <div className="relative px-5 py-16 md:px-20 md:py-20">
          <h2 className="text-center font-accent text-[40px] leading-[55px] tracking-[-1.1px] text-[#f07828] md:text-[64px]">
            What You Get?
          </h2>

          <div className="mt-14 flex flex-col gap-14 md:mt-20 md:gap-[34px]">
            {WHAT_YOU_GET.map((item) => (
              <article
                key={item.title}
                className={`flex flex-col items-center gap-8 lg:gap-[32px] xl:gap-[174px] ${
                  item.imageRight ? "lg:flex-row" : "lg:flex-row-reverse"
                } ${item.imageRight ? "" : "lg:justify-end"}`}
              >
                <div className="flex w-full max-w-[520px] flex-col gap-6">
                  <div
                    className="flex items-center rounded-full px-6 py-8"
                    style={{
                      backgroundImage: "linear-gradient(90deg, #F0782A 0%, #FFFFFF 97.01%)",
                    }}
                  >
                    <h3 className="text-2xl font-semibold leading-5 text-[#11172a]">{item.title}</h3>
                  </div>
                  <p className="max-w-[481px] text-lg font-medium leading-5 text-[#616161]">
                    {item.description}
                  </p>
                </div>
                <div className="relative h-[240px] w-full max-w-[426px] shrink-0 overflow-hidden rounded-2xl lg:h-[275px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="426px"
                    className="object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
