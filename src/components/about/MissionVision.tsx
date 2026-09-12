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

const columns = [
  {
    title: "Our Mission",
    icon: "/figma/about/mission-icon.svg",
    body: "To make professional car repair accessible, affordable and stress free for every car owner by bringing certified mechanics directly to them — at home, at work or on the road.",
  },
  {
    title: "Our Vision",
    icon: "/figma/about/vision-icon.svg",
    body: "To become the most trusted mobile mechanic service in every city — known for speed, transparency and workmanship that car owners can always count on.",
  },
] as const;

export function MissionVision() {
  return (
    <section className="border-y-[0.8px] border-[#2a2a2a] bg-black text-white">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-0 px-5 py-12 md:px-10 lg:grid-cols-2 lg:px-20 lg:py-0">
        {columns.map((col, index) => (
          <article
            key={col.title}
            className={`flex flex-col items-start gap-8 py-10 lg:py-12 ${
              index === 0
                ? "border-b border-[#2a2a2a] lg:border-b-0 lg:border-r lg:pr-12"
                : "lg:pl-12"
            }`}
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-[#1a1a1a]">
              <MaskIcon src={col.icon} color="#b8b6b6" />
            </div>
            <div className="flex w-full flex-col gap-6">
              <h3 className="font-accent text-[32px] leading-10 sm:text-[40px] sm:leading-[48px]">
                {col.title}
              </h3>
              <p className="max-w-[592px] text-base leading-6 text-white/90">{col.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
