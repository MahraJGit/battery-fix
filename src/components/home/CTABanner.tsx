import { SITE } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-brand py-[100px] text-white shadow-[0_40px_80px_rgba(155,149,149,0.16)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(42,17,2,0.85) 18%, rgba(240,120,42,0.35) 88%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex w-full max-w-[869px] flex-col items-center gap-8 px-5 text-center">
        <div className="space-y-4">
          <h2 className="font-accent text-[40px] leading-[1.1] text-[#fefefe] md:text-[64px] md:leading-[60px]">
            Need A Battery Replacement?
          </h2>
          <p className="text-lg leading-7 text-white">
            Get professional battery service at your location without the hassle.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-brand transition hover:bg-[#fff4eb]"
          >
            Call now
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            className="inline-flex h-12 items-center justify-center rounded-full border border-white px-8 text-base text-white transition hover:bg-white/10"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
