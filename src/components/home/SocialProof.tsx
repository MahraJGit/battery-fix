"use client";

import Image from "next/image";
import { useState } from "react";
import { FigmaIcon } from "@/components/common/FigmaIcon";

const testimonials = [
  {
    name: "Rick Wright",
    role: "Executive Engineer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    avatar: "/figma/testimonials/avatar1.png",
  },
  {
    name: "Rick Wright",
    role: "Executive Engineer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    avatar: "/figma/testimonials/avatar2.png",
  },
  {
    name: "Rick Wright",
    role: "Executive Engineer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    avatar: "/figma/testimonials/avatar3.png",
  },
] as const;

export function SocialProof() {
  const [index, setIndex] = useState(0);
  const visible = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <section className="relative overflow-hidden bg-[#141a1a] py-[100px] text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(58deg, rgba(0,0,0,0.8) 57%, rgba(240,120,42,0.8) 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-[1141px] flex-col items-center px-5 text-center">
        <h2 className="font-accent text-[40px] leading-[1.1] md:text-[64px] md:leading-[55px]">
          Trusted By Drivers Across
          <span className="block">The UAE</span>
        </h2>
        <p className="mt-8 max-w-[1038px] text-base leading-[24px] text-[#fcfcfc] md:mt-16 md:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
          interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos.
        </p>

        <div className="mt-14 flex w-full max-w-[1193px] flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-[33px]">
          {visible.map((item, i) => (
            <article
              key={`${item.name}-${i}-${index}`}
              className="relative w-full max-w-[580px] pt-[39px]"
            >
              <div className="relative min-h-[305px] rounded-[42px] border-[3px] border-white/77 bg-white/13 px-8 pb-10 pt-16 backdrop-blur-[10px]">
                <div className="absolute left-1/2 top-0 size-[78px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-white">
                  <Image src={item.avatar} alt={item.name} fill className="object-cover" sizes="78px" />
                </div>
                <div className="mb-4 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <FigmaIcon
                      key={star}
                      src="/figma/testimonials/star.svg"
                      width={17}
                      height={16}
                    />
                  ))}
                </div>
                <p className="mx-auto max-w-[420px] text-sm leading-6 text-white/90">{item.quote}</p>
                <p className="mt-6 font-display text-lg font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-white/70">{item.role}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-7">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="relative flex size-[70px] items-center justify-center"
            onClick={() => setIndex((v) => (v - 1 + testimonials.length) % testimonials.length)}
          >
            <Image src="/figma/testimonials/btn-ring.svg" alt="" fill className="object-contain" />
            {/* Both arrow SVGs point right — mirror for previous */}
            <FigmaIcon
              src="/figma/testimonials/arrow-left.svg"
              width={10}
              height={22}
              flipX
              className="relative z-[1]"
            />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            className="relative flex size-[70px] items-center justify-center"
            onClick={() => setIndex((v) => (v + 1) % testimonials.length)}
          >
            <Image src="/figma/testimonials/btn-ring.svg" alt="" fill className="object-contain" />
            <FigmaIcon
              src="/figma/testimonials/arrow-right.svg"
              width={10}
              height={22}
              className="relative z-[1]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
