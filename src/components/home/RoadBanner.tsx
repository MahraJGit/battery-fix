import { Container } from "@/components/common/Container";

export function RoadBanner() {
  return (
    <section className="bg-ink py-16 text-white md:py-20">
      <Container className="max-w-4xl text-center">
        <h2 className="font-display text-[34px] font-extrabold leading-[1.15] tracking-tight md:text-[48px]">
          From <span className="text-brand">Breakdown</span> To{" "}
          <span className="text-brand">Back On The Road.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/70 md:text-base">
          Help is simple. Contact us, share your location, and we&apos;ll take care of diagnostics,
          replacement, and testing — so you can get moving again with confidence.
        </p>
      </Container>
    </section>
  );
}
