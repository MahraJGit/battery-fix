"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "Why is Webflow the best nocode tool?",
    answer:
      "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. Our team is available 24/7 for follow-up questions, warranty guidance, and emergency battery support across the UAE.",
  },
  {
    question: "How fast can you reach my location?",
    answer:
      "In most urban areas we aim to arrive within 25–45 minutes after you share your pin location.",
  },
  {
    question: "Is installation included with replacement?",
    answer:
      "Yes. On-site testing, removal, installation, and a final charge-system check are included.",
  },
] as const;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="overflow-hidden bg-white px-5 py-[72px] md:px-10 md:py-[100px] lg:px-[81px]">
      <h2 className="text-center font-accent text-[36px] leading-tight text-[#242424] md:text-[64px]">
        Questions? We&apos;ve Got{" "}
        <span className="text-[#f07828]">You Covered.</span>
      </h2>

      <div className="mx-auto mt-8 flex w-full max-w-[1277px] flex-col items-center gap-8 lg:mt-8 lg:flex-row lg:gap-[31px]">
        <div className="relative h-[360px] w-full max-w-[545px] shrink-0 lg:h-[358px]">
          <Image
            src="/figma/faq/bg-simple.svg"
            alt=""
            fill
            className="object-contain object-center opacity-90"
          />
          <Image
            src="/figma/faq/faqs-text.svg"
            alt=""
            width={451}
            height={219}
            className="absolute left-[9%] top-[35%] w-[83%]"
          />
          <Image
            src="/figma/faq/char1.svg"
            alt=""
            width={157}
            height={233}
            className="absolute left-[0%] top-[6%] w-[29%]"
          />
          <Image
            src="/figma/faq/char2.svg"
            alt=""
            width={195}
            height={197}
            className="absolute left-[40%] top-[42%] w-[36%]"
          />
          <Image
            src="/figma/faq/char3.svg"
            alt=""
            width={115}
            height={288}
            className="absolute right-[0%] top-[16%] w-[21%]"
          />
          <Image
            src="/figma/faq/bubble.svg"
            alt=""
            width={179}
            height={77}
            className="absolute left-[32%] top-[12%] w-[33%]"
          />
        </div>

        <div className="flex w-full flex-1 flex-col gap-6">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <button
                key={item.question}
                type="button"
                className={`w-full rounded-2xl p-8 text-left transition ${
                  open
                    ? "bg-[#fcebe0]"
                    : "border border-[#f1f2f9] bg-white shadow-[0_1px_2px_rgba(25,33,61,0.06)]"
                }`}
                onClick={() => setOpenIndex(open ? -1 : index)}
                aria-expanded={open}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-display ${
                        open ? "text-sm font-semibold text-[#242424]" : "text-base font-medium text-[#170f49]"
                      }`}
                    >
                      {item.question}
                    </p>
                    {open ? (
                      <p className="mt-3 text-xs leading-relaxed text-[#242424]">{item.answer}</p>
                    ) : null}
                  </div>
                  {!open ? (
                    <Image
                      src="/figma/faq/add.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="mt-1 h-4 w-4 shrink-0"
                    />
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
