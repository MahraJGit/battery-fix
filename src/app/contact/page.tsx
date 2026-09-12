import { ConnectTeam } from "@/components/contact/ConnectTeam";
import { ContactHero } from "@/components/contact/ContactHero";
import { CTABanner } from "@/components/home/CTABanner";
import { contactMetadata } from "@/lib/seo";

export const metadata = contactMetadata;

export default function ContactPage() {
  return (
    <div className="bg-black">
      <ContactHero />
      <ConnectTeam />
      <CTABanner />
    </div>
  );
}
