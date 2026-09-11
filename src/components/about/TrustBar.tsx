import { ABOUT_TRUST_ITEMS } from "@/lib/about-page";

function TrustItem({ label }: { label: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/figma/about/check.svg" alt="" width={22} height={22} className="size-[22px]" />
      <span className="text-base leading-6 text-white">{label}</span>
    </span>
  );
}

export function TrustBar() {
  const items = [...ABOUT_TRUST_ITEMS, ...ABOUT_TRUST_ITEMS];

  return (
    <div className="relative h-[90px] w-full overflow-hidden bg-[#f97316]">
      <div className="about-trust-marquee absolute inset-y-0 flex items-center gap-12 whitespace-nowrap">
        {items.map((label, i) => (
          <TrustItem key={`${label}-${i}`} label={label} />
        ))}
      </div>
    </div>
  );
}
