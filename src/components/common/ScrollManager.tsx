"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const HEADER_OFFSET = 80;

export function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

export function scrollToTopInstant() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

/**
 * Instant scroll-to-top on route changes so CSS smooth-scroll
 * doesn't keep pulling the page back to the hero while the user scrolls.
 * Hash links still smooth-scroll to their section.
 */
export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const frame = window.requestAnimationFrame(() => {
        scrollToHash(hash, "smooth");
      });
      return () => window.cancelAnimationFrame(frame);
    }

    scrollToTopInstant();
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash) {
        scrollToHash(window.location.hash, "smooth");
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
