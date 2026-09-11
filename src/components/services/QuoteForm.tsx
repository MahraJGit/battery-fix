"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/constants";

const fieldClass =
  "h-[43.4px] w-full rounded-md border border-[#eae6dc] bg-[#fdfcfa] px-[15.8px] text-sm leading-[17px] text-[#090e12] outline-none placeholder:text-[#95a0ab] focus:border-[#f0782a]";

const selectClass =
  "h-[46.4px] w-full appearance-none rounded-md border border-[#eae6dc] bg-[#fdfcfa] px-5 pr-10 text-sm leading-5 text-[#090e12] outline-none focus:border-[#f0782a]";

const selectChevron = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23090E12' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 16px center",
  backgroundSize: "12px",
} as const;

function PhoneIcon() {
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" aria-hidden>
      <path
        d="M16.125 12.315V14.97C16.125 15.16 16.0575 15.3275 15.9225 15.4725C15.7875 15.6175 15.625 15.7 15.435 15.72C15.105 15.74 14.835 15.75 14.625 15.75C12.995 15.75 11.44 15.435 9.96 14.805C8.52 14.195 7.2475 13.3375 6.1425 12.2325C5.0375 11.1275 4.18 9.855 3.57 8.415C2.94 6.935 2.625 5.38 2.625 3.75C2.625 3.54 2.635 3.27 2.655 2.94C2.675 2.75 2.7575 2.5875 2.9025 2.4525C3.0475 2.3175 3.215 2.25 3.405 2.25H6.06C6.16 2.25 6.245 2.2825 6.315 2.3475C6.385 2.4125 6.425 2.49 6.435 2.58L6.48 3C6.63 4.05 6.93 5.05 7.38 6C7.42 6.08 7.43 6.16 7.41 6.24C7.39 6.32 7.345 6.385 7.275 6.435L5.655 7.59C6.145 8.74 6.835 9.76 7.725 10.65C8.615 11.54 9.635 12.23 10.785 12.72L11.94 11.1C11.99 11.03 12.055 10.985 12.135 10.965C12.215 10.945 12.295 10.955 12.375 10.995C13.325 11.445 14.325 11.745 15.375 11.895L15.795 11.94C15.885 11.95 15.9625 11.99 16.0275 12.06C16.0925 12.13 16.125 12.215 16.125 12.315Z"
        fill="#F0782A"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" aria-hidden>
      <path
        d="M9.5 1.5C5.36 1.5 2 4.86 2 9s3.36 7.5 7.5 7.5S17 13.14 17 9 13.64 1.5 9.5 1.5Zm0 13.5A6 6 0 1 1 9.5 3a6 6 0 0 1 0 12Zm.75-6V4.5h-1.5v5.25l3.9 2.34.75-1.23-3.15-1.86Z"
        fill="#F0782A"
      />
    </svg>
  );
}

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-black px-5 py-20 md:px-10 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1298px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        {/* Left — vertically centered beside the form (Figma) */}
        <div className="flex w-full flex-col justify-center gap-6 lg:max-w-[617px] lg:flex-1 lg:self-stretch">
          <h2 className="font-accent text-[40px] leading-[48px] tracking-[-1.2px] text-white md:text-[48px]">
            Tell us about your car.
          </h2>
          <p className="max-w-[463px] text-lg leading-[22px] text-white">
            Share a few details and we&apos;ll get back to you with a clear quote and the right
            battery for your vehicle — no obligation.
          </p>

          <div className="flex flex-col gap-4 pt-4">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[rgba(249,142,80,0.16)]">
                <PhoneIcon />
              </span>
              <span className="flex flex-col">
                <span className="text-[11px] uppercase leading-4 tracking-[0.275px] text-white">
                  Call anytime, 24/7
                </span>
                <span
                  className="text-base font-bold leading-6 text-white"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {SITE.phoneDisplay}
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[rgba(249,142,80,0.16)]">
                <ClockIcon />
              </span>
              <div className="flex flex-col">
                <p className="text-[11px] uppercase leading-4 tracking-[0.275px] text-white">
                  Average response
                </p>
                <p
                  className="text-base font-bold leading-6 text-white"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  Under 45 minutes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form card — 617px / padding 35.8 / gap 28 */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-7 rounded-md bg-white p-9 lg:w-[617px] lg:shrink-0 lg:p-[35.8px]"
        >
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-[20px]">
            <label className="flex flex-col gap-2 text-sm font-medium leading-5 text-[#222a32]">
              Full name
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className={fieldClass}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium leading-5 text-[#222a32]">
              Email
              <input
                required
                name="email"
                type="email"
                placeholder="you@email.com"
                className={fieldClass}
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-[20px]">
            <label className="flex flex-col gap-2 text-sm font-medium leading-5 text-[#222a32]">
              Phone
              <input
                required
                name="phone"
                type="tel"
                placeholder="+971 5X XXX XXXX"
                className={fieldClass}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium leading-5 text-[#222a32]">
              Vehicle year
              <select
                required
                name="year"
                defaultValue=""
                className={selectClass}
                style={selectChevron}
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

          <label className="flex flex-col gap-2 text-sm font-medium leading-5 text-[#222a32]">
            Car make &amp; model
            <input
              required
              name="vehicle"
              type="text"
              placeholder="e.g. Toyota Land Cruiser"
              className={fieldClass}
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium leading-5 text-[#222a32]">
            Your location
            <select
              required
              name="location"
              defaultValue=""
              className={selectClass}
              style={selectChevron}
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

          <label className="flex flex-col gap-2 text-sm font-medium leading-5 text-[#222a32]">
            Notes (optional)
            <textarea
              name="notes"
              placeholder="Anything we should know about your car or the issue?"
              className="h-[105.6px] w-full resize-none rounded-md border border-[#eae6dc] bg-[#fdfcfa] px-[15.8px] py-3 text-sm leading-5 text-[#090e12] outline-none placeholder:text-[#95a0ab] focus:border-[#f0782a]"
            />
          </label>

          <button
            type="submit"
            className="inline-flex h-[55px] w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#f0782a] px-7 text-[15px] font-semibold leading-[22px] text-[#fdfcfa] transition hover:bg-[#d06217]"
          >
            {submitted ? "Request Sent — We'll Call You Soon" : "Request My Free Quote"}
            {!submitted && (
              <svg width={16} height={15} viewBox="0 0 16 15" fill="none" aria-hidden>
                <path
                  d="M1 7.5h13M9.5 2l5.5 5.5L9.5 13"
                  stroke="#FDFCFA"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
