import { CTABanner } from "@/components/home/CTABanner";
import { FAQ } from "@/components/home/FAQ";
import { FastHelp } from "@/components/home/FastHelp";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Services } from "@/components/home/Services";
import { SocialProof } from "@/components/home/SocialProof";
import { WhyUs } from "@/components/home/WhyUs";
import { homeMetadata, organizationJsonLd } from "@/lib/seo";

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <FastHelp />
      <Services />
      <WhyUs />
      <HowItWorks />
      <SocialProof />
      <FAQ />
      <CTABanner />
    </>
  );
}
