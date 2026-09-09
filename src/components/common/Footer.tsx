import Image from "next/image";
import Link from "next/link";
import { FigmaIcon } from "@/components/common/FigmaIcon";
import { SITE } from "@/lib/constants";

const services = [
  "Battery Replacement",
  "Battery Testing",
  "Jump Start",
  "AGM Batteries",
  "Emergency Battery Service",
] as const;

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Brands", href: "/#about" },
  { label: "How It Works", href: "/#about" },
  { label: "Areas", href: "/#contact" },
  { label: "FAQs", href: "/#faq" },
] as const;

const contacts = [
  { icon: "/figma/footer/phone.svg", label: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
  { icon: "/figma/footer/wa.svg", label: "WhatsApp", href: `https://wa.me/${SITE.whatsapp}`, flipY: true },
  { icon: "/figma/footer/mail.svg", label: SITE.email, href: `mailto:${SITE.email}` },
  { icon: "/figma/footer/pin.svg", label: SITE.address, href: undefined },
] as const;

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,0.4) 69%, rgba(240,120,42,0.4) 142%), linear-gradient(90deg, #000 0%, #000 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 py-16 md:px-10 lg:flex-row lg:gap-8 lg:px-20 lg:py-[72px]">
        <div className="w-full shrink-0 lg:w-[553px]">
          <Image
            src="/figma/footer/logo.svg"
            alt="Battery Fix"
            width={91}
            height={61}
            className="h-[61px] w-[91px] max-w-none"
          />
          <p className="mt-4 max-w-[490px] text-sm leading-normal text-white/55">
            24/7 mobile car battery replacement and roadside battery service across the UAE.
          </p>
        </div>

        <div className="grid flex-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.05em] text-white/90">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-white/55">
              {services.map((item) => (
                <li key={item}>
                  <Link href="/#services" className="text-white/55 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.05em] text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/55">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/55 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.05em] text-white/90">
              Contact
            </h3>
            <ul className="space-y-[15px] text-sm text-white/55">
              {contacts.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <FigmaIcon
                    src={item.icon}
                    width={15}
                    height={14}
                    flipY={"flipY" in item ? Boolean(item.flipY) : false}
                  />
                  {item.href ? (
                    <a href={item.href} className="text-white/55 hover:text-white">
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
