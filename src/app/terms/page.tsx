import { termsMetadata } from "@/lib/seo";

export const metadata = termsMetadata;

const sections = [
  {
    title: "Use of Our Website",
    body:
      "You may use our website only for lawful purposes and in a way that does not harm, disrupt, or misuse our systems, content, or services. This includes not attempting to gain unauthorized access, spread harmful software, or interfere with how the site functions for other users. We reserve the right to restrict or suspend access if these terms are not followed.",
    variant: "card",
  },
  {
    title: "User Responsibilities",
    body:
      "You agree to provide accurate and up-to-date information when contacting us or requesting our services so we can respond and assist you properly. You are responsible for keeping any account or login details confidential and for all activity that happens under your account, including any actions taken by others you share access with.",
    variant: "card",
  },
  {
    title: "Intellectual Property",
    body:
      "All content on this website, including text, graphics, logos, and designs, is the property of Ainovex Technologies or its licensors and is protected under applicable intellectual property laws. You may not copy, reproduce, or distribute any part of it without our written permission, whether for personal or commercial use.",
    variant: "plain",
  },
  {
    title: "Third-Party Services & Links",
    body:
      "Our website may include links to third-party websites or tools that we do not control, such as partner platforms or resources we reference. We are not responsible for their content, privacy practices, or performance, and using them is at your own discretion and risk.",
    variant: "card",
  },
  {
    title: "Disclaimer",
    body:
      "Our website and services are provided \"as is\" without warranties of any kind, either expressed or implied. While we work hard to keep information accurate and up-to-date, we do not guarantee that it will always be error free, complete, or suitable for every purpose.",
    variant: "card",
  },
] as const;

export default function TermsPage() {
  return (
    <div className="bg-white text-[#242424]" style={{ margin: 0, padding: 0 }}>
      <section
        className="relative overflow-hidden bg-[#000000]"
        style={{ width: "100vw", minWidth: "100%", height: "519px", margin: "0 auto", padding: 0 }}
      >
        <div
          className="absolute"
          style={{
            width: "532px",
            height: "673.39px",
            left: "926px",
            top: "229.68px",
            background: "#F0782A",
            opacity: 0.41,
            filter: "blur(117.507px)",
            transform: "rotate(103.01deg)",
          }}
        />

        <h1
          style={{
            position: "absolute",
            width: "650px",
            height: "60px",
            left: "calc(50% - 650px/2 + 1px)",
            top: "calc(50% - 60px/2 + 0.18px)",
            fontFamily: "'Montserrat', sans-serif",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "56px",
            lineHeight: "108%",
            letterSpacing: "-0.03em",
            margin: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "#F0782A" }}>Terms</span>
          <span style={{ color: "#FFFFFF" }}>&nbsp;&amp; Conditions</span>
        </h1>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-10 lg:px-0 lg:py-[120px]">
          <p
            className="mb-8 max-w-[1280px] text-lg leading-7 md:text-[20px] md:leading-6"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "#878787" }}
          >
            These terms &amp; conditions govern your use of the Ainovex Technologies website and services. By accessing our website or engaging our services, you agree to these terms. Please read them carefully before continuing to use our site, as they explain your rights and responsibilities as a visitor or client.
          </p>

          <div className="space-y-6 md:space-y-8">
            {sections.map((section) => {
              const isCard = section.variant === "card";

              return (
                <article
                  key={section.title}
                  className={
                    isCard
                      ? "relative overflow-hidden rounded-2xl bg-[#f2f2f2] px-5 py-5 md:px-8 md:py-8"
                      : "px-0 py-2 md:py-4"
                  }
                >
                  {isCard ? <div className="absolute inset-y-0 left-0 w-[7px] rounded-r-lg bg-[#f0782a]" /> : null}

                  <div className={isCard ? "ml-4 md:ml-6" : ""}>
                    <h2
                      className="mb-4 text-[28px] font-semibold leading-6 text-[#242424] md:text-[32px]"
                      style={{ fontFamily: "var(--font-manrope), sans-serif", color: "#242424" }}
                    >
                      {section.title}
                    </h2>

                    <p
                      className="text-lg leading-7 md:text-[20px] md:leading-6"
                      style={{ fontFamily: "var(--font-inter), sans-serif", color: "#707070" }}
                    >
                      {section.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
