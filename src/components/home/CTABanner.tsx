import { SITE } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-brand py-16 text-white shadow-[0_40px_80px_rgba(155,149,149,0.16)] md:py-[100px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(42,17,2,0.85) 18%, rgba(240,120,42,0.35) 88%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center gap-6 px-5 text-center md:gap-8">
        <div className="w-full space-y-4">
          <h2 className="heading-accent-oneline text-[#fefefe]">Need A Battery Replacement?</h2>
          <p className="mx-auto max-w-[869px] text-base leading-7 text-white md:text-lg">
            Get professional battery service at your location without the hassle.
          </p>
        </div>
        <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-brand transition hover:bg-[#fff4eb]"
          >
            Call now
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full border border-white px-8 text-base text-white transition hover:bg-white/10"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
