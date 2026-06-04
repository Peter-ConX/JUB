export const primaryEmail = "ikdany412@gmail.com" as const;

export const siteConfig = {
  name: "Jubilee Event Center & Entertainment Hub",
  nameShort: "Jubilee",
  tagline: "An ultra modern events place",
  description:
    "Jubilee Event Center & Entertainment Hub is an ultra modern venue in Idimu, Lagos — hosting weddings, birthdays, conferences, fellowship meetings, political gatherings, and more, with full event support from planning to security.",
  location: {
    address:
      "6, Lawrence Street Off Ejibo Road OPC Junction, Idimu, Lagos State.",
    mapQuery:
      "6 Lawrence Street Off Ejibo Road OPC Junction Idimu Lagos Nigeria",
  },
  contact: {
    phone: ["+234 906 610 7393"],
    whatsappDisplay: "+234 803 719 4925",
    email: [primaryEmail],
    whatsapp: "2348037194925",
    hours: "Mon – Sun: 8:00 AM – 10:00 PM",
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

export const eventCategories = [
  {
    title: "Celebrations",
    description: "Life milestones deserve a setting as memorable as the moment itself.",
    events: [
      "Weddings",
      "Birthdays",
      "Child Naming",
      "Marriage Anniversaries",
      "Retirement Celebrations",
    ],
    icon: "party",
  },
  {
    title: "Corporate & Social",
    description: "Professional spaces for meetings, rallies, and year-end gatherings.",
    events: [
      "Seminars",
      "Political Party Meetings",
      "End of Year Celebrations",
    ],
    icon: "briefcase",
  },
  {
    title: "Faith & Conferences",
    description: "Welcoming halls for prayer, fellowship, and large-scale conferences.",
    events: ["Fellowship / Prayer Meetings", "Conferences", "And more"],
    icon: "users",
  },
];

export const additionalServices = [
  {
    title: "Party Rentals",
    subtitle: "Chairs & Tables",
    description:
      "Quality party chairs and tables for hire — perfect for outdoor events, home parties, and hall extensions.",
    icon: "armchair",
  },
  {
    title: "Event Planning",
    subtitle: "& Decoration",
    description:
      "From concept to decor, our team helps you design and execute events that look as polished as they feel.",
    icon: "palette",
  },
  {
    title: "Event Security",
    subtitle: "Bouncers & Staff",
    description:
      "Trained security personnel and bouncers to keep your guests safe and your celebration running smoothly.",
    icon: "shield",
  },
];

export const features = [
  {
    title: "Spacious",
    subtitle: "Event Halls",
    description:
      "Versatile indoor spaces suited for weddings, conferences, parties, and large community gatherings.",
    icon: "users",
  },
  {
    title: "Fully",
    subtitle: "Air Conditioned",
    description:
      "Climate-controlled interiors keep guests comfortable from arrival through the final toast.",
    icon: "wind",
  },
  {
    title: "Secure",
    subtitle: "Parking",
    description:
      "Ample, well-lit parking with dedicated security for a seamless guest arrival experience.",
    icon: "car",
  },
  {
    title: "Reliable",
    subtitle: "Power Supply",
    description:
      "Backup power keeps your programme running flawlessly, day or night.",
    icon: "zap",
  },
];

export const whyChooseUs = [
  {
    title: "Ultra Modern Venue",
    description:
      "A contemporary event center in Idimu designed for weddings, conferences, and celebrations of every scale.",
    icon: "sparkles",
  },
  {
    title: "Full-Service Support",
    description:
      "Rentals, planning, decoration, and security — everything you need under one trusted roof.",
    icon: "heart-handshake",
  },
  {
    title: "Experienced Team",
    description:
      "Dedicated coordinators who understand Lagos events and deliver with professionalism and care.",
    icon: "users-round",
  },
  {
    title: "Prime Idimu Location",
    description:
      "Easy to find at Lawrence Street, OPC Junction — convenient for guests across Lagos.",
    icon: "map-pin",
  },
];

export const galleryItems = [
  {
    src: "/images/outside.jpeg",
    alt: "Jubilee Event Center exterior — modern navy and white architecture in Idimu",
    label: "Exterior View",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/outside.jpeg",
    alt: "Jubilee Event Center building facade",
    label: "Building Facade",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/outside.jpeg",
    alt: "Jubilee Event Center entrance and perimeter",
    label: "Entrance",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/outside.jpeg",
    alt: "Jubilee Event Center & Entertainment Hub venue overview",
    label: "Venue Overview",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/outside.jpeg",
    alt: "Jubilee Event Center — Lagos entertainment hub",
    label: "Event Center",
    span: "col-span-2 row-span-1",
  },
];

export const defaultWhatsAppGreeting =
  "Hello Jubilee Event Center & Entertainment Hub, I'd like to get in touch about your venue.";

export function getWhatsAppUrl(text: string = defaultWhatsAppGreeting): string {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Event types for the enquiries form (aligned with hosted services). */
export const enquiryEventTypes = [
  "Wedding",
  "Birthday",
  "Child Naming",
  "Marriage Anniversary",
  "Retirement Celebration",
  "Seminar",
  "Political Party Meeting",
  "End of Year Celebration",
  "Fellowship / Prayer Meeting",
  "Conference",
  "Other",
] as const;

export function buildEnquiryMessage(data: {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  message: string;
}): string {
  return [
    "Hello Jubilee Event Center & Entertainment Hub,",
    "",
    "I would like to make an enquiry:",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Event Type: ${data.eventType}`,
    "",
    "Event Details:",
    data.message,
  ].join("\n");
}

export function buildEnquiryMailSubject(name: string, eventType: string): string {
  return `Event Enquiry – ${eventType} – ${name}`.trim();
}

export const aboutPoints = [
  "Weddings, birthdays, naming ceremonies, anniversaries & retirement parties",
  "Seminars, political meetings, end-of-year celebrations & conferences",
  "Fellowship and prayer meetings in a welcoming, modern setting",
  "Party chair & table rentals, planning, decoration & event security",
];
