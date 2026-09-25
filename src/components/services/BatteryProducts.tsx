import Image from "next/image";
import { BATTERY_PRODUCTS } from "@/lib/services-page";

export function BatteryProducts() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-[72px] md:px-10 md:py-[112px] lg:px-20">
      <div
        className="pointer-events-none absolute right-0 top-0 hidden opacity-20 lg:block"
        aria-hidden
      >
        <svg width="219" height="302" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="rgba(249,142,80,1)" />
        </svg>
      </div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-14">
        <div className="flex max-w-[750px] flex-col items-center gap-4 text-center">
          <h2 className="font-accent text-[40px] leading-[55px] tracking-[-1.1px] text-[#f07828] md:text-[64px]">
            The Right Battery For Your Car
          </h2>
          <p className="max-w-[695px] text-lg leading-7 text-[#485460]">
            Tell us about your vehicle and driving habits, and we&apos;ll recommend the option that
            fits your needs and budget — no confusing technical overload.
          </p>
        </div>
      </div>
    </section>
  );
}
