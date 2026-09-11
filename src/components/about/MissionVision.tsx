function MaskIcon({ src, color }: { src: string; color: string }) {
  return (
    <span
      className="block size-8"
      style={{
        backgroundColor: color,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
      aria-hidden
    />
  );
}

export function MissionVision() {
  return (
    <section className="border-y-[0.8px] border-[#2a2a2a] bg-black text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 py-12 md:px-10 lg:flex-row lg:items-stretch lg:gap-12 lg:px-20 lg:py-12">
        <article className="flex flex-1 flex-col items-start gap-8 py-0 lg:py-12">
          <div className="flex size-12 items-center justify-center rounded-md bg-[#1a1a1a]">
            <MaskIcon src="/figma/about/mission-icon.svg" color="#b8b6b6" />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-accent text-[32px] leading-10 sm:text-[40px] sm:leading-[48px]">
              Our Mission
            </h3>
            <p className="max-w-[592px] text-base leading-6 text-white">
              To make professional car repair accessible, affordable and stress free for every car
              owner by bringing certified mechanics directly to them — at home, at work or on the
              road.
            </p>
          </div>
        </article>

        <div className="hidden w-px shrink-0 self-stretch bg-[#2a2a2a] lg:block" aria-hidden />

        <article className="flex flex-1 flex-col items-start gap-8 border-t border-[#2a2a2a] pt-10 lg:border-t-0 lg:py-12 lg:pt-0">
          <div className="flex size-12 items-center justify-center rounded-lg bg-[#1a1a1a]">
            <MaskIcon src="/figma/about/vision-icon.svg" color="#b8b6b6" />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-accent text-[32px] leading-10 sm:text-[40px] sm:leading-[48px]">
              Our Vision
            </h3>
            <p className="max-w-[592px] text-base leading-6 text-white">
              To become the most trusted mobile mechanic service in every city — known for speed,
              transparency and workmanship that car owners can always count on.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
