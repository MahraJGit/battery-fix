"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/constants";

function EmailIcon() {
  return (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden>
      <rect x="1" y="1" width="20" height="16" rx="2" stroke="#FD7E1E" strokeWidth="2" />
      <path d="M3 4.5L11 10.5L19 4.5" stroke="#FD7E1E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" aria-hidden>
      <path
        d="M1 9.5L11 1.5L21 9.5"
        stroke="#FD7E1E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 8.5V18.5C3.5 19.0523 3.94772 19.5 4.5 19.5H8.5V13.5H13.5V19.5H17.5C18.0523 19.5 18.5 19.0523 18.5 18.5V8.5"
        stroke="#FD7E1E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" aria-hidden>
      <path
        d="M13.5 1.5H5.5C4.11929 1.5 3 2.61929 3 4V18C3 19.3807 4.11929 20.5 5.5 20.5H13.5C14.8807 20.5 16 19.3807 16 18V4C16 2.61929 14.8807 1.5 13.5 1.5Z"
        stroke="#FD7E1E"
        strokeWidth="2"
      />
      <path
        d="M7.5 1.5V3.5H11.5V1.5"
        stroke="#FD7E1E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M8 17.5H11" stroke="#FD7E1E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const fieldClass =
  "h-16 w-full rounded-lg border border-[#d8d8d8] bg-white px-[25px] text-base leading-[19px] text-[#090e12] outline-none placeholder:text-[#494949] focus:border-[#fd7e1e]";

export function ConnectTeam() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-[72px] md:px-10 lg:px-20 lg:py-[120px]">
      <div
        className="pointer-events-none absolute z-[1] h-[673px] w-[532px] bg-[rgba(240,120,42,0.6)] opacity-60 blur-[118px]"
        style={{ left: -576, top: -302, transform: "rotate(103.01deg)" }}
        aria-hidden
      />

      <div className="relative z-0 mx-auto flex w-full max-w-[1280px] flex-col items-center gap-4">
        <h2 className="max-w-[558px] text-center font-accent text-[40px] leading-[1.15] tracking-[-2.25px] text-[#242424] sm:text-[56px] sm:leading-[71px]">
          Connect With Our <span className="text-[#ff6c1a]">Team</span>
        </h2>

        <p className="max-w-[704px] text-center text-base font-medium leading-[22px] text-[rgba(36,36,36,0.87)] sm:text-lg">
          Prefer to call, email, or drop by in person? Pick whatever works best for you, we&apos;re
          ready to help either way.
        </p>

        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
          <div className="flex w-full max-w-[433px] flex-col gap-[30px]">
            <a
              href={`mailto:${SITE.email}`}
              className="relative flex min-h-[29px] items-center pl-[67px]"
            >
              <span className="absolute left-0 top-1/2 inline-flex w-[22px] -translate-y-1/2 justify-center">
                <EmailIcon />
              </span>
              <span
                className="text-xl leading-[145%] text-black"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {SITE.email}
              </span>
            </a>

            <div className="relative flex min-h-[58px] items-start pl-[67px]">
              <span className="absolute left-0 top-[9px] inline-flex w-[22px] justify-center">
                <LocationIcon />
              </span>
              <p
                className="max-w-[366px] text-xl leading-[145%] text-black"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Dubai Marina Walk, Dubai
                <br />
                United Arab Emirates
              </p>
            </div>

            <a
              href={`tel:${SITE.phone}`}
              className="relative flex min-h-[29px] items-center pl-[67px]"
            >
              <span className="absolute left-0 top-1/2 inline-flex w-[21px] -translate-y-1/2 justify-center">
                <PhoneIcon />
              </span>
              <span
                className="text-xl leading-[145%] text-black"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {SITE.phoneDisplay}
              </span>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[597px] flex-col gap-[15px] lg:shrink-0"
          >
            <label className="sr-only" htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              required
              name="name"
              type="text"
              placeholder="Name"
              className={fieldClass}
            />

            <label className="sr-only" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              required
              name="email"
              type="email"
              placeholder="dash@ui8.net"
              className={fieldClass}
            />

            <label className="sr-only" htmlFor="contact-website">
              Website
            </label>
            <input
              id="contact-website"
              name="website"
              type="text"
              placeholder="Website"
              className={fieldClass}
            />

            <label className="sr-only" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              name="message"
              placeholder="Message"
              className="h-[146px] w-full resize-none rounded-lg border border-[#d8d8d8] bg-white px-[25px] py-5 text-base leading-[19px] text-[#090e12] outline-none placeholder:text-[#494949] focus:border-[#fd7e1e]"
            />

            <button
              type="submit"
              className="inline-flex h-16 w-full cursor-pointer items-center justify-center rounded-[6px] bg-[#ff6c1a] text-xl font-medium leading-6 text-white transition hover:brightness-95"
            >
              {submitted ? "Message Sent" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
