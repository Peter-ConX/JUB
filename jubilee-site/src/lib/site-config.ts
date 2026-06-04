export const primaryEmail = "okaforchi05@gmail.com" as const;

export const isDemoSite = true;

export const siteConfig = {
  name: "Royal Hall Event Centre",
  nameShort: "Royal Hall",
  tagline: "Where extraordinary events find their signature setting",
  description:
    "Royal Hall Event Centre is a premier destination in Lekki for weddings, corporate galas, receptions, conferences, and high-end celebrations — crafted with the precision and poise of world-class hospitality.",
  location: {
    address: "12 Admiralty Way, Lekki Phase 1, Lagos State, Nigeria",
    mapQuery: "12 Admiralty Way Lekki Phase 1 Lagos Nigeria",
  },
  contact: {
    phone: [] as string[],
    whatsappDisplay: "09035231402",
    email: [primaryEmail],
    whatsapp: "2349035231402",
    hours: "Mon – Sun: 9:00 AM – 11:00 PM",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
  ],
};

/** All showcase imagery — sourced from demo assets only */
export const images = {
  wedding: "/images/venue-wedding.jpg",
  celebration: "/images/venue-celebration.webp",
  concert: "/images/venue-concert.jpg",
} as const;

export const eventCategories = [
  {
    title: "Weddings & Receptions",
    description:
      "Grand halls bathed in light, designed for vows, receptions, and evenings that linger in memory.",
    events: [
      "White weddings & traditional ceremonies",
      "Engagement & reception dinners",
      "Anniversary galas",
    ],
    icon: "party",
  },
  {
    title: "Corporate & Conferences",
    description:
      "Boardroom poise meets ballroom scale — for summits, launches, and executive gatherings.",
    events: [
      "Conferences & seminars",
      "Product launches",
      "End-of-year galas",
    ],
    icon: "briefcase",
  },
  {
    title: "Private Celebrations",
    description:
      "Intimate to extravagant — birthdays, naming ceremonies, and milestone moments.",
    events: [
      "Birthdays & naming ceremonies",
      "Charity & fundraising evenings",
      "Private concerts & entertainment",
    ],
    icon: "users",
  },
];

export const additionalServices = [
  {
    title: "Event Design",
    subtitle: "& Styling",
    description:
      "Curated décor, floral concepts, and spatial design that elevate every detail to editorial standard.",
    icon: "palette",
  },
  {
    title: "Premium Catering",
    subtitle: "Partnerships",
    description:
      "World-class culinary partners for plated dinners, cocktail receptions, and bespoke menus.",
    icon: "armchair",
  },
  {
    title: "Concierge",
    subtitle: "& Coordination",
    description:
      "Dedicated event managers who orchestrate every moment with discretion and precision.",
    icon: "shield",
  },
];

export const features = [
  {
    title: "800+",
    subtitle: "Guest Capacity",
    description:
      "Expansive ballrooms and breakout spaces for celebrations of commanding scale.",
    icon: "users",
  },
  {
    title: "Climate",
    subtitle: "Controlled Halls",
    description:
      "Perfectly tempered interiors for guest comfort from arrival to final toast.",
    icon: "wind",
  },
  {
    title: "Valet",
    subtitle: "& Secure Parking",
    description:
      "Ample, attended parking for a seamless arrival experience befitting your guests.",
    icon: "car",
  },
  {
    title: "Uninterrupted",
    subtitle: "Power & AV",
    description:
      "Professional sound, lighting, and backup power for flawless programmes.",
    icon: "zap",
  },
];

export const whyChooseUs = [
  {
    title: "Lekki's Finest Address",
    description:
      "A prestigious Admiralty Way location — accessible, secure, and unmistakably premium.",
    icon: "map-pin",
  },
  {
    title: "Cinematic Ambience",
    description:
      "Architectural grandeur and atmospheric lighting that photographs as beautifully as it feels.",
    icon: "sparkles",
  },
  {
    title: "White-Glove Service",
    description:
      "Hospitality-trained teams who anticipate needs before they are spoken.",
    icon: "heart-handshake",
  },
  {
    title: "Versatile Spaces",
    description:
      "From intimate soirées to thousand-guest galas — one venue, infinite possibilities.",
    icon: "users-round",
  },
];

export const galleryItems = [
  {
    src: images.wedding,
    alt: "Luxury wedding reception at Royal Hall Event Centre",
    label: "Wedding Reception",
    span: "col-span-2 row-span-2",
    objectPosition: "center",
  },
  {
    src: images.celebration,
    alt: "Intimate family celebration at Royal Hall",
    label: "Private Celebration",
    span: "col-span-1 row-span-1",
    objectPosition: "center",
  },
  {
    src: images.concert,
    alt: "Live entertainment and concert at Royal Hall",
    label: "Live Entertainment",
    span: "col-span-1 row-span-1",
    objectPosition: "center top",
  },
  {
    src: images.celebration,
    alt: "Elegant gathering at Royal Hall Event Centre",
    label: "Elegant Gatherings",
    span: "col-span-1 row-span-2",
    objectPosition: "center",
  },
  {
    src: images.wedding,
    alt: "Grand ballroom setup at Royal Hall",
    label: "Grand Ballroom",
    span: "col-span-2 row-span-1",
    objectPosition: "left center",
  },
];

export const testimonials = [
  {
    quote:
      "Royal Hall transformed our wedding into something from a magazine. Every detail felt intentional, every moment felt royal.",
    author: "Adaeze & Emeka",
    event: "Wedding Reception",
  },
  {
    quote:
      "Our corporate gala exceeded every expectation. The space, the service, the atmosphere — simply world-class.",
    author: "Lagos Finance Summit",
    event: "Corporate Gala",
  },
  {
    quote:
      "From first walkthrough to final farewell, the team delivered hospitality you would expect at a five-star resort.",
    author: "Mrs. Okonkwo",
    event: "Anniversary Celebration",
  },
];

export const defaultWhatsAppGreeting =
  "Hello Royal Hall Event Centre, I would like to enquire about hosting an event at your venue.";

export function getWhatsAppUrl(text: string = defaultWhatsAppGreeting): string {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function buildEnquiryMessage(data: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  enquiry: string;
}): string {
  const fullName = `${data.firstName} ${data.lastName}`.trim();
  return [
    "Hello Royal Hall Event Centre,",
    "",
    "I would like to make an enquiry:",
    "",
    `Name: ${fullName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    "",
    "Enquiry:",
    data.enquiry,
  ].join("\n");
}

export function buildEnquiryMailSubject(firstName: string, lastName: string): string {
  return `Enquiry from ${firstName} ${lastName} — Royal Hall Event Centre`.trim();
}

export const aboutPoints = [
  "Grand ballrooms for weddings, receptions & white-tie galas",
  "Executive conference halls & corporate summit spaces",
  "Birthdays, naming ceremonies & milestone celebrations",
  "Full event design, catering partnerships & concierge coordination",
];
