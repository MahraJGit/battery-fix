"use client";

import { FormEvent, useState } from "react";
import { FigmaIcon } from "@/components/common/FigmaIcon";
import { SITE } from "@/lib/constants";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-black px-5 py-20 md:px-10 lg:px-20">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col justify-end gap-6 lg:pr-8">
          <h2 className="font-accent text-[40px] leading-[48px] tracking-[-1.2px] text-white md:text-[48px]">
            Tell us about your car.
          </h2>
          <p className="max-w-[463px] text-lg leading-[22px] text-white">
            Share a few details and we&apos;ll get back to you with a clear quote and the right
            battery for your vehicle — no obligation.
          </p>

          <div className="mt-2 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[rgba(249,142,80,0.16)]">
                <FigmaIcon src="/figma/hero/btn-phone.svg" width={19} height={18} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.275px] text-white">Call anytime, 24/7</p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[rgba(249,142,80,0.16)]">
                <FigmaIcon src="/figma/hero/btn-wa.svg" width={19} height={18} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.275px] text-white">Average response</p>
                <p className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white">
                  Under 45 minutes
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-7 rounded-[6px] bg-white p-6 md:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-[#222a32]">
              Full name
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="h-[43px] rounded-[6px] border border-[#eae6dc] bg-[#fdfcfa] px-4 text-sm text-[#090e12] outline-none placeholder:text-[#95a0ab] focus:border-[#f0782a]"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#222a32]">
              Email
              <input
                required
                name="email"
                type="email"
                placeholder="you@email.com"
                className="h-[43px] rounded-[6px] border border-[#eae6dc] bg-[#fdfcfa] px-4 text-sm text-[#090e12] outline-none placeholder:text-[#95a0ab] focus:border-[#f0782a]"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-[#222a32]">
              Phone
              <input
                required
                name="phone"
                type="tel"
                placeholder="+971 5X XXX XXXX"
                className="h-[43px] rounded-[6px] border border-[#eae6dc] bg-[#fdfcfa] px-4 text-sm text-[#090e12] outline-none placeholder:text-[#95a0ab] focus:border-[#f0782a]"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#222a32]">
              Vehicle year
              <select
                required
                name="year"
                defaultValue=""
                className="h-[46px] rounded-[6px] border border-[#eae6dc] bg-[#fdfcfa] px-4 text-sm text-[#090e12] outline-none focus:border-[#f0782a]"
              >
                <option value="" disabled>
                  Select year
                </option>
                {Array.from({ length: 30 }, (_, i) => 2026 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-[#222a32]">
            Car make &amp; model
            <input
              required
              name="vehicle"
              type="text"
              placeholder="e.g. Toyota Land Cruiser"
              className="h-[43px] rounded-[6px] border border-[#eae6dc] bg-[#fdfcfa] px-4 text-sm text-[#090e12] outline-none placeholder:text-[#95a0ab] focus:border-[#f0782a]"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-[#222a32]">
            Your location
            <select
              required
              name="location"
              defaultValue=""
              className="h-[46px] rounded-[6px] border border-[#eae6dc] bg-[#fdfcfa] px-4 text-sm text-[#090e12] outline-none focus:border-[#f0782a]"
            >
              <option value="" disabled>
                Where is your car?
              </option>
              <option value="dubai">Dubai</option>
              <option value="sharjah">Sharjah</option>
              <option value="ajman">Ajman</option>
              <option value="abudhabi">Abu Dhabi</option>
              <option value="other">Other Emirates</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-[#222a32]">
            Notes (optional)
            <textarea
              name="notes"
              rows={4}
              placeholder="Anything we should know about your car or the issue?"
              className="resize-none rounded-[6px] border border-[#eae6dc] bg-[#fdfcfa] px-4 py-3 text-sm text-[#090e12] outline-none placeholder:text-[#95a0ab] focus:border-[#f0782a]"
            />
          </label>

          <button
            type="submit"
            className="inline-flex h-[55px] items-center justify-center gap-2 rounded-[6px] bg-[#f0782a] text-[15px] font-semibold text-[#fdfcfa] transition hover:bg-[#d06217]"
          >
            {submitted ? "Request Sent — We'll Call You Soon" : "Request My Free Quote"}
          </button>
        </form>
      </div>
    </section>
  );
}
