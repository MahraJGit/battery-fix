export const SITE = {
  name: "Battery Fix",
  legalName: "Battery Fix UAE",
  tagline: "24/7 mobile battery replacement at your location across the UAE.",
  url: "https://batteryfix.ae",
  phone: "+971501234567",
  phoneDisplay: "+971 50 123 4567",
  whatsapp: "971501234567",
  email: "help@batteryfix.ae",
  address: "UAE Service Coverage",
  hours: "24/7 Emergency Service",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/#contact" },
] as const;

export const SERVICES = [
  {
    id: "01",
    title: "Battery Replacement",
    description:
      "On-site car battery replacement with genuine batteries fitted by trained technicians.",
    image: "/images/service-replacement.jpg",
  },
  {
    id: "02",
    title: "Battery Testing",
    description:
      "Accurate diagnostics so you only replace what you need — no guesswork, no upsell.",
    image: "/images/service-testing.jpg",
  },
  {
    id: "03",
    title: "Jump Start",
    description:
      "Fast jump-start assistance when your vehicle won't turn over — we come to you.",
    image: "/images/service-jumpstart.jpg",
  },
  {
    id: "04",
    title: "AGM Battery Replacement",
    description:
      "Professional AGM and specialty battery replacement delivered at your location.",
    image: "/images/service-agm.jpg",
  },
] as const;

export const WHY_FEATURES = [
  {
    title: "24/7 Emergency Support",
    description: "Round-the-clock response across Dubai, Sharjah and major Emirates.",
  },
  {
    title: "Genuine Battery Brands",
    description: "Warranty-backed batteries built for extreme UAE heat conditions.",
  },
  {
    title: "Warranty Included",
    description: "Official manufacturer warranty on every battery we install.",
  },
  {
    title: "Professional Technicians",
    description: "Certified experts trained for every make and model on UAE roads.",
  },
  {
    title: "Free Installation",
    description: "On-site fitting included — no workshop visit, no tow required.",
  },
  {
    title: "Service At Your Location",
    description: "Home, office, roadside or parking — we come directly to you.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    id: "01",
    title: "Fast Response",
    description:
      "Share your location and we’ll dispatch the nearest mobile technician right away.",
  },
  {
    id: "02",
    title: "We Find the Right Battery",
    description:
      "We match your vehicle with the correct battery for reliable performance and a proper fit.",
  },
  {
    id: "03",
    title: "Installed & Ready To Go",
    description:
      "We safely remove the old battery, install the replacement, and test charging before you leave.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ahmad",
    location: "Dubai",
    quote:
      "My car battery died on the road, and their team arrived within 30 minutes. Quick, professional, and got me back driving in no time!",
    rating: 5,
  },
  {
    name: "Zainab",
    location: "Sharjah",
    quote:
      "Got my battery tested before a long trip. The team was professional, explained everything clearly, and gave me peace of mind.",
    rating: 5,
  },
  {
    name: "M. Ali",
    location: "Abu Dhabi",
    quote:
      "Found out my battery was old and got it replaced on the spot. Fast, affordable, and the technician did a great job.",
    rating: 5,
  },
] as const;

export const FAQS = [
  {
    question: "How fast can you reach me?",
    answer:
      "In most urban areas across Dubai and Sharjah we aim to arrive within 25–45 minutes, depending on traffic and your exact location.",
  },
  {
    question: "Do you replace batteries on-site?",
    answer:
      "Yes. Our mobile technicians bring stocked batteries, testing equipment, and tools so we can diagnose, replace, and test at your location.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We serve Dubai, Sharjah, Ajman, and other major Emirates. Call us with your pin location and we’ll confirm ETA immediately.",
  },
  {
    question: "Is there a warranty on batteries?",
    answer:
      "Every battery we install includes an official manufacturer warranty. We’ll walk you through coverage before installation.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, card, and popular digital payments. You’ll get clear pricing before any work begins.",
  },
] as const;

export const BRANDS = [
  "Toyota",
  "Nissan",
  "BMW",
  "Mercedes",
  "Audi",
  "Lexus",
  "Honda",
  "Ford",
] as const;
