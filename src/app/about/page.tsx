import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { MissionVision } from "@/components/about/MissionVision";
import { Principles } from "@/components/about/Principles";
import { TrustBar } from "@/components/about/TrustBar";
import { aboutMetadata } from "@/lib/seo";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <div className="bg-black">
      <AboutHero />
      <TrustBar />
      <AboutStory />
      <MissionVision />
      <Principles />
    </div>
  );
}
