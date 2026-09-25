import { privacyMetadata } from "@/lib/seo";
import { LocationIcon, MailIcon, PhoneIcon } from "@/components/icons";

export const metadata = privacyMetadata;

const sections = [
  {
    title: "Information We Collect",
    lead: "We may collect:",
    items: [
      ["Contact information", "Name, email, phone number, company name, and business details."],
      ["Communication information", "Information you provide when contacting or communicating with us."],
      ["Contact information", "Name, email, phone number, company name, and business details."],
      ["Service information", "Information needed to provide and support our services."],
      ["Technical information", "IP address, browser, device, operating system, and similar technical data."],
      ["Usage information", "Information about how you use our website and services."],
      ["Third-party information", "Information lawfully provided by business partners, service providers, or other sources."],
    ],
    variant: "card",
  },
  {
    title: "How We Use Your Information",
    body:
      "We use the information we collect to:\n• Respond to your enquiries and requests\n• Provide battery replacement and roadside services\n• Confirm and manage appointments\n• Identify the appropriate battery for your vehicle\n• Contact you regarding your requested service\n• Improve our website, services, and customer experience\n• Prevent fraud, misuse, or unauthorized activity\n• Comply with applicable legal and regulatory requirements",
    variant: "card",
  },
  {
    title: "Location Information",
    body:
      "Because we provide mobile battery replacement services, we may need your location or service address to send a technician to your vehicle. We use this information only as necessary to arrange and provide the requested service.",
    variant: "plain",
  },
  {
    title: "How We Protect Your Information",
    body:
      "We take reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, alteration, or disclosure. However, no method of transmitting or storing information online can be guaranteed to be completely secure.",
    variant: "card",
  },
  {
    title: "Sharing Your Information",
    body:
      "We do not sell or rent your personal information. We may share relevant information with trusted service providers, technicians, payment providers, technology providers, or other partners when necessary to process your request or deliver our services. We may also disclose information when required by law or when necessary to protect our legal rights, customers, or business.",
    variant: "plain",
  },
  {
    title: "Cookies & Tracking Technologies",
    body:
      "Our website may use cookies and similar technologies to:\n• Keep the website functioning properly\n• Understand how visitors use our website\n• Improve website performance\n• Remember certain preferences\n• Measure marketing and advertising performance\nYou can manage or disable cookies through your browser settings. Some website features may not function properly if certain cookies are disabled.",
    variant: "plain",
  },
  {
    title: "Third-Party Services",
    body:
      "Our website may contain links to or use services provided by third parties, such as payment processors, analytics providers, maps, advertising platforms, or communication services. These third parties may process information according to their own privacy policies. We recommend reviewing their policies when using their services.",
    variant: "card",
  },
  {
    title: "Third-Party Services",
    body:
      "Our website may contain links to or use services provided by third parties, such as payment processors, analytics providers, maps, advertising platforms, or communication services. These third parties may process information according to their own privacy policies. We recommend reviewing their policies when using their services.",
    variant: "plain",
  },
  {
    title: "Your Privacy Rights",
    body:
      "Depending on applicable law, you may have the right to:\n• Request access to the personal information we hold about you\n• Ask us to correct inaccurate information\n• Request deletion of your information\n• Withdraw consent where processing is based on consent\n• Object to certain types of processing\n• Request information about how your data is being used\nTo exercise any applicable rights, please contact us using the details provided below.",
    variant: "plain",
  },
  {
    title: "Data Retention",
    body:
      "We retain personal information only for as long as reasonably necessary to provide our services, maintain business and transaction records, resolve disputes, meet legal obligations, and protect our legitimate business interests. When information is no longer required, we take reasonable steps to securely delete or anonymize it.",
    variant: "plain",
  },
  {
    title: "Children's Privacy",
    body:
      "Our services are intended for adults and are not directed toward children. We do not knowingly collect personal information from children without appropriate authorization.\nTo exercise any applicable rights, please contact us using the details provided below.",
    variant: "plain",
  },
  {
    title: "Changes to This Privacy Policy",
    body:
      "We may update this Privacy Policy from time to time to reflect changes in our services, technology, or legal requirements. When we make changes, we will update the “Last Updated” date at the top of this page.",
    variant: "plain",
  },
] as const;

export default function PrivacyPage() {
  return (
    <div className="bg-white text-[#242424]">
      <section className="relative h-[519px] w-full overflow-hidden bg-black">
        <div
          className="absolute h-[673px] w-[532px] opacity-40 blur-[118px]"
          style={{
            left: "calc(50% + 206px)",
            top: "230px",
            background:
              "radial-gradient(ellipse at center, rgba(240, 120, 42, 0.95) 0%, rgba(240, 120, 42, 0.55) 42%, rgba(240, 120, 42, 0) 76%)",
            transform: "rotate(103deg)",
          }}
          aria-hidden
        />
        <h1 className="absolute inset-0 flex items-center justify-center px-5 text-center font-[family-name:var(--font-montserrat)] text-[42px] font-bold leading-[1.08] md:text-[56px]">
          <span className="text-[#F0782A]">Privacy</span>
          <span className="text-white">&nbsp;Policy</span>
        </h1>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-10 lg:pb-0 lg:pt-[120px] xl:px-0">
          <p className="mb-8 max-w-[1280px] font-[family-name:var(--font-inter)] text-lg leading-7 text-[#878787] md:text-[20px] md:leading-6 lg:mb-0 lg:min-h-[72px]">
            This privacy policy explains how Battery Fix UAE collects, uses, and protects your
            information when you visit our website or use our mobile battery services. By using our
            website, you agree to the practices described below.
          </p>

          <div className="space-y-6 md:space-y-6">
            {sections.map((section, index) => {
              const isCard = section.variant === "card";
              const figmaHeight = [532, 336, 96, 168, 168, 264, 144, 144, 264, 168, 144, 96][index];

              return (
                <article
                  key={`${section.title}-${index}`}
                  className={
                    isCard
                      ? "relative overflow-hidden rounded-2xl bg-[#f2f2f2] px-5 py-5 md:px-0 md:py-6"
                      : "px-0 py-0"
                  }
                  style={{ minHeight: figmaHeight }}
                >
                  {isCard ? <div className="absolute inset-y-0 left-0 w-[7px] rounded-r-lg bg-[#f0782a]" /> : null}
                  <div className={isCard ? "ml-4 md:mx-6" : ""}>
                  <h2 className="mb-4 font-[family-name:var(--font-manrope)] text-[28px] font-semibold leading-[1.2] text-[#242424] md:mb-6 md:text-[32px]">
                    {section.title}
                  </h2>
                  {"items" in section ? (
                    <>
                      <p className="font-[family-name:var(--font-inter)] text-lg leading-7 text-[#242424] md:text-[20px] md:leading-6">
                        {section.lead}
                      </p>
                      <div className="mt-4 flex flex-col gap-[10px]">
                        {section.items.map(([label, description], itemIndex) => (
                          <p
                            key={`${label}-${itemIndex}`}
                            className="h-12 font-[family-name:var(--font-inter)] text-lg font-medium leading-6 text-[#242424] md:text-[20px]"
                          >
                            {label}
                            <br />
                            <span className="pl-5 text-[#878787]">• {description}</span>
                          </p>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="whitespace-pre-line font-[family-name:var(--font-inter)] text-lg leading-7 text-[#707070] md:text-[20px] md:leading-6">
                      {section.body}
                    </p>
                  )}
                  </div>
                </article>
              );
            })}
          </div>

          <section className="relative mt-10 flex min-h-[561px] w-full flex-col items-center justify-center gap-10 overflow-hidden bg-white px-5 py-10 text-center md:mt-16 md:h-[561px] md:min-h-[561px] md:gap-16 md:px-20 md:py-[120px]">
            <div
              className="pointer-events-none absolute z-0 h-[673.39px] w-[532px] bg-[#f0782a] opacity-60 blur-[117.507px]"
              style={{ left: "-576px", top: "-302.32px", transform: "rotate(103.01deg)" }}
              aria-hidden
            />
            <div className="relative z-[1] flex w-full max-w-[1120px] flex-col items-center gap-4">
              <h2 className="font-accent text-[32px] leading-[1.1] tracking-[-2.25px] text-[#242424] md:text-[56px] md:leading-[71px]">
                Contact <span className="text-[#f07828]">Us</span>
              </h2>
              <p className="h-auto w-full max-w-[704px] text-base leading-6 text-[#242424]/[0.87] md:h-11 md:text-lg md:font-medium md:leading-[22px]">
                If you have questions about this Privacy Policy or how we handle your information,
                please contact us.
              </p>
              <div className="flex h-auto w-full items-center justify-center md:h-[114px]">
                <div className="flex w-full max-w-[567px] flex-col items-start gap-4 text-left font-[family-name:var(--font-montserrat)] text-base leading-[23px] text-black">
                  <p className="flex w-full items-center gap-3">
                    <MailIcon className="h-[18px] w-[22px] shrink-0 text-[#fd7e1e]" />
                    <span>info@mehrajfloors.com</span>
                  </p>
                  <p className="flex w-full items-center gap-3">
                    <LocationIcon className="h-[21px] w-[22px] shrink-0 text-[#fd7e1e]" />
                    <span>World Trade Center, Office Number: 4087, Islamabad, Pakistan</span>
                  </p>
                  <p className="flex w-full items-center gap-3">
                    <PhoneIcon className="h-[22px] w-[21px] shrink-0 text-[#fd7e1e]" />
                    <span>+92 51 782 5153</span>
                  </p>
                </div>
              </div>
              <p className="h-auto w-full max-w-[704px] text-base leading-6 text-[#242424]/[0.87] md:h-11 md:text-lg md:font-medium md:leading-[22px]">
                We&apos;re committed to handling your information responsibly and providing a transparent,
                reliable service experience.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
