export function ContactHero() {
  return (
    <section className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden bg-black lg:h-[519px]">
      <div
        className="pointer-events-none absolute z-0 h-[673px] w-[532px] bg-[#f0782a] opacity-60 blur-[118px]"
        style={{ left: -347, top: -336, transform: "rotate(103.01deg)" }}
        aria-hidden
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[714px] flex-col items-center gap-3.5 px-5 py-16 text-center md:px-10">
        <h1 className="max-w-[541px] font-display text-[36px] font-medium leading-[1.35] tracking-[-2.25px] text-white sm:text-[48px] sm:leading-[72px]">
          Facing Battery Problem?
          <br />
          <span className="text-[#f0782a]">Let&apos;s Talk</span>
        </h1>
        <p className="max-w-[704px] text-base font-medium leading-[22px] text-white sm:text-lg">
          Whether you need a battery replacement, a quick battery check, or roadside assistance,
          we&apos;re here to help. Tell us what your car needs and where you are, and our team will
          get you back on the road with fast, reliable service.
        </p>
      </div>
    </section>
  );
}
