import { CTABanner } from "@/components/home/CTABanner";
import { FAQ } from "@/components/home/FAQ";
import { Services } from "@/components/home/Services";
import { SocialProof } from "@/components/home/SocialProof";
import { BatteryProducts } from "@/components/services/BatteryProducts";
import { LocationSection } from "@/components/services/LocationSection";
import { OurProcess } from "@/components/services/OurProcess";
import { QuoteForm } from "@/components/services/QuoteForm";
import { ServicesHero } from "@/components/services/ServicesHero";
import { WhatYouGet } from "@/components/services/WhatYouGet";
import { WhyChooseUs } from "@/components/services/WhyChooseUs";
import { SERVICES_FAQS } from "@/lib/services-page";
import { servicesMetadata } from "@/lib/seo";

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services showViewAll={false} />
      <BatteryProducts />
      <SocialProof />
      <WhyChooseUs />
      <OurProcess />
      <WhatYouGet />
      <LocationSection />
      <FAQ items={SERVICES_FAQS} illustrationSrc="/figma/services-page/faqs_cuate.svg" />
      <QuoteForm />
      <CTABanner />
    </>
  );
}
