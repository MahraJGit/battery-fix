import type { Metadata } from "next";
import { SITE } from "./constants";

const title = `${SITE.name} UAE | 24/7 Mobile Car Battery Replacement`;
const description =
  "Dead battery? Battery Fix comes to you across the UAE. Fast 24/7 mobile battery replacement, testing, and jump-start at your location.";

export const homeMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  keywords: [
    "car battery replacement UAE",
    "mobile battery service Dubai",
    "24/7 battery replacement",
    "jump start Dubai",
    "Battery Fix UAE",
    "roadside battery Sharjah",
  ],
  authors: [{ name: SITE.legalName }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE.url,
    siteName: SITE.legalName,
    title,
    description,
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Battery Fix UAE mobile battery service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export const servicesMetadata: Metadata = {
  ...homeMetadata,
  title: `${SITE.name} UAE | Mobile Battery Services`,
  description:
    "Complete battery care wherever you are. 24/7 mobile battery replacement, testing, jump starts, and AGM service across the UAE.",
  alternates: {
    canonical: `${SITE.url}/services`,
  },
  openGraph: {
    ...homeMetadata.openGraph,
    title: `${SITE.name} UAE | Mobile Battery Services`,
    url: `${SITE.url}/services`,
  },
};

export const aboutMetadata: Metadata = {
  ...homeMetadata,
  title: `${SITE.name} UAE | About Us`,
  description:
    "We are the mechanics who come to you. Learn about Battery Fix UAE — our story, mission, vision, and the principles behind our 24/7 mobile battery service.",
  alternates: {
    canonical: `${SITE.url}/about`,
  },
  openGraph: {
    ...homeMetadata.openGraph,
    title: `${SITE.name} UAE | About Us`,
    url: `${SITE.url}/about`,
  },
};

export const contactMetadata: Metadata = {
  ...homeMetadata,
  title: `${SITE.name} UAE | Contact Us`,
  description:
    "Facing a battery problem? Contact Battery Fix UAE — call, email, or send a message for fast 24/7 mobile battery replacement and roadside help.",
  alternates: {
    canonical: `${SITE.url}/contact`,
  },
  openGraph: {
    ...homeMetadata.openGraph,
    title: `${SITE.name} UAE | Contact Us`,
    url: `${SITE.url}/contact`,
  },
};

export const termsMetadata: Metadata = {
  ...homeMetadata,
  title: `${SITE.name} UAE | Terms & Conditions`,
  description:
    "Read the Battery Fix UAE terms and conditions covering website use, responsibilities, intellectual property, and service limitations.",
  alternates: {
    canonical: `${SITE.url}/terms`,
  },
  openGraph: {
    ...homeMetadata.openGraph,
    title: `${SITE.name} UAE | Terms & Conditions`,
    url: `${SITE.url}/terms`,
  },
};

export const privacyMetadata: Metadata = {
  ...homeMetadata,
  title: `${SITE.name} UAE | Privacy Policy`,
  description:
    "Read the Battery Fix UAE privacy policy covering the information we collect, how we use it, and the choices available to you.",
  alternates: {
    canonical: `${SITE.url}/privacy`,
  },
  openGraph: {
    ...homeMetadata.openGraph,
    title: `${SITE.name} UAE | Privacy Policy`,
    url: `${SITE.url}/privacy`,
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: SITE.legalName,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/images/og-cover.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: ["Dubai", "Sharjah", "Ajman", "Abu Dhabi", "UAE"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
};
