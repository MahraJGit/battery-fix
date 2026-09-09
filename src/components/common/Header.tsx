"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FigmaIcon } from "@/components/common/FigmaIcon";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#07080f]">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center gap-4 px-5 md:px-10 lg:px-20">
        <Link href="/" className="relative inline-grid h-11 w-11 shrink-0" aria-label={`${SITE.name} home`}>
          <FigmaIcon
            src="/figma/header/logo-gear.svg"
            width={44}
            height={44}
            priority
            className="col-start-1 row-start-1"
          />
          <span className="col-start-1 row-start-1 ml-[7.5px] mt-[9.5px]">
            <FigmaIcon src="/figma/header/logo-wrench.svg" width={17} height={26} priority />
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 justify-center md:flex" aria-label="Primary">
          <ul className="flex h-12 items-center gap-4 lg:gap-6">
            {NAV_LINKS.map((link) => {
              const active = link.href === "/";
              return (
                <li key={link.href} className="h-full shrink-0">
                  <Link
                    href={link.href}
                    className={`flex h-full items-center whitespace-nowrap px-2 text-sm ${
                      active
                        ? "border-b-2 border-[#f8d6c0] bg-gradient-to-b from-[rgba(7,8,15,0.8)] from-[27%] to-[rgba(240,120,40,0.8)] to-[113%] font-medium text-white"
                        : "font-normal text-white hover:text-white/80"
                    }`}
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-3 md:flex lg:gap-4">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-[#e87c33] px-5 text-sm text-[#e87c33] transition hover:bg-[#e87c33]/10 lg:px-6 lg:text-base xl:px-8"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            WhatsApp Us
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#e87c33] px-5 text-sm font-semibold text-white transition hover:bg-[#d06217] lg:px-6 lg:text-base xl:px-8"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Call now
          </a>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#07080f] md:hidden">
          <div className="flex flex-col gap-2 px-5 py-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base text-white/90"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full border border-[#e87c33] text-[#e87c33]"
            >
              WhatsApp Us
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#e87c33] font-semibold text-white"
            >
              Call now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
