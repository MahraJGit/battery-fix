const A = "/figma/services-page";

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Fast Response",
    description:
      "Get help when you need it. Our mobile technicians come directly to your location.",
    icon: `${A}/Frame_2147258735.svg`,
    position: "top-left" as const,
  },
  {
    title: "The Right Battery",
    description:
      "We match your vehicle with the right battery for reliable performance and a proper fit.",
    icon: `${A}/Frame_2147258736.svg`,
    position: "bottom-left" as const,
  },
  {
    title: "Professional Installation",
    description:
      "Our trained technicians remove your old battery, install the new one, and make sure everything is working properly.",
    icon: `${A}/Frame_2147258737.svg`,
    position: "top-right" as const,
  },
  {
    title: "Warranty Included",
    description:
      "Drive with confidence knowing your new battery is backed by reliable warranty coverage.",
    icon: `${A}/Frame_2147258738.svg`,
    position: "bottom-right" as const,
  },
] as const;

export const PROCESS_STEPS = [
  {
    id: "01",
    title: "Tell us about your car",
    description:
      "Share your car's make, model, year, and your current location. This helps us understand your vehicle and recommend the right battery for its specific requirements.",
    align: "right" as const,
  },
  {
    id: "02",
    title: "We Find the Right Battery",
    description:
      "Based on your vehicle details, we identify a compatible battery from our range of trusted brands. You'll know what battery you're getting before our technician arrives.",
    align: "left" as const,
  },
  {
    id: "03",
    title: "We Come To You",
    description:
      "Choose a convenient time and location, whether you're at home, at work, or stuck roadside. Our technician arrives with the right battery and professional equipment.",
    align: "right" as const,
  },
  {
    id: "04",
    title: "Installed & Ready to Go",
    description:
      "We safely remove your old battery, install the replacement, and test the battery and charging system to make sure everything is working properly before you get back on the road.",
    align: "left" as const,
  },
] as const;

const sharedDesc =
  "We check your existing battery and charging system to identify the problem before recommending a replacement.";

export const WHAT_YOU_GET = [
  {
    title: "Battery Inspection",
    description: sharedDesc,
    image: `${A}/Rectangle_521.png`,
    imageRight: true,
  },
  {
    title: "Battery Matching",
    description: sharedDesc,
    image: `${A}/Rectangle_521_2.png`,
    imageRight: false,
  },
  {
    title: "Battery Selection",
    description: sharedDesc,
    image: `${A}/Rectangle_521_3.png`,
    imageRight: true,
  },
  {
    title: "Professional Installation",
    description: sharedDesc,
    image: `${A}/Rectangle_521_4.png`,
    imageRight: false,
  },
  {
    title: "System Testing",
    description: sharedDesc,
    image: `${A}/Rectangle_521_5.png`,
    imageRight: true,
  },
  {
    title: "Old Battery Removal",
    description: sharedDesc,
    image: `${A}/Rectangle_521_6.png`,
    imageRight: false,
  },
] as const;

export const LOCATION_TAGS = [
  { label: "Home", icon: `${A}/Icon_3.svg` },
  { label: "Office", icon: `${A}/Icon_4.svg` },
  { label: "Parking", icon: `${A}/Icon_5.svg` },
  { label: "Roadside", icon: `${A}/Icon_6.svg` },
] as const;

export const BATTERY_PRODUCTS = [
  {
    badge: "Everyday value",
    name: "VOLTA Standard",
    type: "Lead-Acid Battery",
    fit: "Most sedans & compact cars",
    warranty: "12-month warranty",
    status: "In stock",
    image: `${A}/Rectangle_521.png`,
  },
  {
    badge: "Everyday value",
    name: "VOLTA Standard",
    type: "Lead-Acid Battery",
    fit: "Most sedans & compact cars",
    warranty: "12-month warranty",
    status: "In stock",
    image: `${A}/Rectangle_521_3.png`,
  },
  {
    badge: "Everyday value",
    name: "VOLTA Standard",
    type: "Lead-Acid Battery",
    fit: "Most sedans & compact cars",
    warranty: "12-month warranty",
    status: "In stock",
    image: `${A}/Rectangle_521_5.png`,
  },
] as const;

export const HERO_AVATARS = [
  `${A}/Ellipse_15.png`,
  `${A}/Ellipse_16.png`,
  `${A}/Ellipse_17.png`,
] as const;

export const SERVICES_FAQS = [
  {
    question: "How fast can you reach my location?",
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
      "We serve Dubai, Sharjah, Ajman, and other major Emirates. Call us with your pin location and we'll confirm ETA immediately.",
  },
  {
    question: "Is installation included with replacement?",
    answer:
      "Yes. On-site testing, removal, installation, and a final charge-system check are included.",
  },
] as const;
