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

        <div className="h-px w-full bg-[#f2f0e9]" />

        <div className="grid w-full gap-px md:grid-cols-2 lg:grid-cols-3">
          {BATTERY_PRODUCTS.map((product, index) => (
            <article
              key={`${product.name}-${index}`}
              className="flex flex-col gap-6 bg-[#fdfcfa]"
            >
              <div className="relative h-[280px] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="426px"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#fdfcfa]/90 px-3 py-1.5 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.275px] text-[#151b21] backdrop-blur-[4px]">
                  {product.badge}
                </span>
              </div>

              <div className="flex flex-col gap-1 px-4">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold leading-7 text-[#090e12]">
                  {product.name}
                </h3>
                <p className="font-[family-name:var(--font-manrope)] text-sm leading-5 text-[#485460]">
                  {product.type}
                </p>
              </div>

              <div className="border-t border-[#f2f0e9] px-4 py-3">
                <div className="flex items-end gap-6 py-1.5">
                  <span className="w-[56px] shrink-0 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.275px] text-[#95a0ab]">
                    Fit
                  </span>
                  <span className="font-[family-name:var(--font-manrope)] text-sm text-[#222a32]">
                    {product.fit}
                  </span>
                </div>
                <div className="flex items-end gap-6 py-1.5">
                  <span className="w-[56px] shrink-0 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.275px] text-[#95a0ab]">
                    Warranty
                  </span>
                  <span className="font-[family-name:var(--font-manrope)] text-sm text-[#222a32]">
                    {product.warranty}
                  </span>
                </div>
                <div className="flex items-center gap-6 py-1.5">
                  <span className="w-[56px] shrink-0 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.275px] text-[#95a0ab]">
                    Status
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-manrope)] text-sm text-[#222a32]">
                    <span className="size-1.5 rounded-full bg-[#125b3a]" />
                    {product.status}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
