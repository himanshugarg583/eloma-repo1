export type CompanyStat = {
  label: string;
  value: number;
  suffix?: string;
};

export type CompanyInfoCard = {
  label: string;
  value: string;
};

export type CompanyActivity = {
  icon: string;
  title: string;
  description: string;
};

export type CompanyProfile = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  overview: string;
  story: string;
  mission: string;
  vision: string;
  industry: string;
  foundedYear: string;
  headquarters: string;
  specialization: string;
  operationalAreas: string;
  logoText: string;
  heroImage: string;
  heroImageAlt: string;
  aboutImage: string;
  gallery: string[];
  details: CompanyInfoCard[];
  activities: CompanyActivity[];
  stats: CompanyStat[];
  values: Array<{ title: string; description: string }>;
  website?: string;
  videoUrl?: string;
};

export const companies: CompanyProfile[] = [
  {
    slug: "eloma-logistics",
    name: "Eloma Logistics",
    tagline: "Reliable movement, transparent operations, and scalable supply-chain execution.",
    description:
      "Eloma Logistics delivers dependable transportation and distribution support across key markets, helping businesses move goods with confidence and control.",
    overview:
      "Eloma Logistics is built around reliability, visibility, and operational discipline. The company supports end-to-end transport coordination, warehouse flow, and regional distribution with a strong focus on service quality.",
    story:
      "The business began as a response to a simple challenge: companies needed a logistics partner that could deliver consistency without adding complexity. Today, Eloma Logistics combines process, technology, and a service-first mindset to support faster, cleaner operations.",
    mission:
      "To simplify logistics through dependable execution, clear communication, and smarter operational design.",
    vision:
      "To become a trusted logistics platform for businesses that want scale without losing service quality.",
    industry: "Transportation and Logistics",
    foundedYear: "2018",
    headquarters: "Sydney, Australia",
    specialization: "Transport, warehousing, and distribution coordination",
    operationalAreas: "Australia, India, Singapore, UAE",
    logoText: "EL",
    heroImage:
      "https://images.unsplash.com/photo-1506850571458-74d0f19f4f91?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Eloma Logistics operations",
    website: "https://eloma-logistics.example.com",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    aboutImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    details: [
      { label: "Industry", value: "Transportation and Logistics" },
      { label: "Founded Year", value: "2018" },
      { label: "Headquarters", value: "Sydney, Australia" },
      { label: "Specialization", value: "Transport and warehousing" },
      { label: "Operational Areas", value: "AU, IN, SG, UAE" }
    ],
    activities: [
      {
        icon: "🚚",
        title: "Freight Coordination",
        description: "Managing freight movement with dependable planning and real-time oversight."
      },
      {
        icon: "📦",
        title: "Warehousing",
        description: "Flexible warehouse support designed to improve inventory flow and control."
      },
      {
        icon: "🛰️",
        title: "Shipment Visibility",
        description: "Clear tracking and communication for faster decisions and smoother handoffs."
      },
      {
        icon: "🤝",
        title: "Distribution Support",
        description: "Regional distribution solutions built to support consistent delivery outcomes."
      }
    ],
    stats: [
      { label: "Years in Business", value: 8, suffix: "+" },
      { label: "Clients", value: 120, suffix: "+" },
      { label: "Projects", value: 340, suffix: "+" },
      { label: "Team Members", value: 90, suffix: "+" }
    ],
    values: [
      { title: "Trust", description: "Reliable delivery and clear communication across every engagement." },
      { title: "Innovation", description: "Smarter systems that improve speed, visibility, and control." },
      { title: "Growth", description: "Solutions designed to support scale as the business expands." },
      { title: "Excellence", description: "A consistent commitment to quality and measurable outcomes." }
    ]
  },
  {
    slug: "eg-transport",
    name: "EG Transport",
    tagline: "Transport solutions designed for reliable movement and operational control.",
    description:
      "EG Transport provides dependable transport operations and delivery coordination for businesses that need strong execution and service consistency.",
    overview:
      "EG Transport focuses on efficient movement, route planning, and dependable coordination across city and regional networks.",
    story:
      "Built to support modern logistics demands, EG Transport blends practical fleet operations with responsive service and a clear focus on delivery performance.",
    mission:
      "To deliver transport services that are dependable, transparent, and operationally efficient.",
    vision:
      "To be a trusted transport partner for businesses that value consistency and scale.",
    industry: "Transportation and Logistics",
    foundedYear: "2017",
    headquarters: "Sydney, Australia",
    specialization: "Fleet operations and movement coordination",
    operationalAreas: "Australia",
    logoText: "EG",
    heroImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "EG Transport fleet",
    website: "https://eg-transport.example.com",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    aboutImage:
      "https://images.unsplash.com/photo-1500220151340-5f4f2a4f95b4?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    details: [
      { label: "Industry", value: "Transportation and Logistics" },
      { label: "Founded Year", value: "2017" },
      { label: "Headquarters", value: "Sydney, Australia" },
      { label: "Specialization", value: "Fleet and movement" },
      { label: "Operational Areas", value: "Australia" }
    ],
    activities: [
      { icon: "🚛", title: "Fleet Planning", description: "Planning transport capacity around delivery schedules and demand." },
      { icon: "📍", title: "Route Optimization", description: "Reducing delays with better route and dispatch coordination." },
      { icon: "📦", title: "Goods Movement", description: "Safe and dependable movement across the supply chain." },
      { icon: "🤝", title: "Client Support", description: "Responsive coordination and updates for every shipment." }
    ],
    stats: [
      { label: "Years in Business", value: 8, suffix: "+" },
      { label: "Clients", value: 80, suffix: "+" },
      { label: "Projects", value: 200, suffix: "+" },
      { label: "Team Members", value: 55, suffix: "+" }
    ],
    values: [
      { title: "Trust", description: "A dependable transport partner with consistent execution." },
      { title: "Innovation", description: "Smarter routing and planning for better outcomes." },
      { title: "Growth", description: "Services designed to grow with customer demand." },
      { title: "Excellence", description: "High standards for service quality and responsiveness." }
    ]
  },
  {
    slug: "eg-digital-australia",
    name: "EG Digital Australia",
    tagline: "Digital systems and platforms built for modern corporate operations.",
    description:
      "EG Digital Australia delivers software, automation, and digital experience solutions to help businesses modernize with confidence.",
    overview:
      "EG Digital Australia focuses on product design, systems automation, and practical digital transformation for enterprise teams.",
    story:
      "The company was created to bring engineering discipline and user-friendly design together in one digital services offering for Australian businesses.",
    mission:
      "To create digital products that simplify work and improve business clarity.",
    vision:
      "To be a leading digital partner for corporate transformation in Australia and beyond.",
    industry: "Digital and Technology",
    foundedYear: "2020",
    headquarters: "Melbourne, Australia",
    specialization: "Web apps, automation, and digital platforms",
    operationalAreas: "Australia, APAC",
    logoText: "DA",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "EG Digital Australia workspace",
    website: "https://eg-digital.example.com",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    aboutImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    ],
    details: [
      { label: "Industry", value: "Digital and Technology" },
      { label: "Founded Year", value: "2020" },
      { label: "Headquarters", value: "Melbourne, Australia" },
      { label: "Specialization", value: "Automation and platforms" },
      { label: "Operational Areas", value: "Australia, APAC" }
    ],
    activities: [
      { icon: "💻", title: "Web Platforms", description: "Corporate websites and custom portals for scalable operations." },
      { icon: "🤖", title: "Automation", description: "Workflow automation that saves time and reduces manual effort." },
      { icon: "📈", title: "Analytics", description: "Business insight tools for sharper decisions." },
      { icon: "🛡️", title: "Reliability", description: "Stable delivery with an eye on performance and security." }
    ],
    stats: [
      { label: "Years in Business", value: 5, suffix: "+" },
      { label: "Clients", value: 65, suffix: "+" },
      { label: "Projects", value: 175, suffix: "+" },
      { label: "Team Members", value: 48, suffix: "+" }
    ],
    values: [
      { title: "Trust", description: "Dependable delivery with clear communication." },
      { title: "Innovation", description: "Practical tech that solves real business needs." },
      { title: "Growth", description: "Platforms that support scale and change." },
      { title: "Excellence", description: "Quality standards built into every release." }
    ]
  },
  {
    slug: "eg-travels",
    name: "EG Travels",
    tagline: "Business and leisure travel support with premium service.",
    description:
      "EG Travels coordinates corporate and leisure travel with the same attention to detail and service quality expected from a premium operator.",
    overview:
      "EG Travels helps travelers and organizations manage bookings, plans, and support across destinations with minimal friction.",
    story:
      "The company grew from the need for smoother, more dependable travel support for both professionals and individuals.",
    mission:
      "To make travel planning simple, reliable, and comfortable.",
    vision:
      "To become a preferred travel partner for corporate and lifestyle travel needs.",
    industry: "Travel and Tourism",
    foundedYear: "2021",
    headquarters: "Brisbane, Australia",
    specialization: "Corporate and leisure travel",
    operationalAreas: "Australia, Singapore, UAE",
    logoText: "TR",
    heroImage:
      "https://images.unsplash.com/photo-1502920917128-1aa500764b6b?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "EG Travels planning desk",
    aboutImage:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494475673543-6a6a27143da6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    details: [
      { label: "Industry", value: "Travel and Tourism" },
      { label: "Founded Year", value: "2021" },
      { label: "Headquarters", value: "Brisbane, Australia" },
      { label: "Specialization", value: "Corporate travel" },
      { label: "Operational Areas", value: "Australia, Singapore, UAE" }
    ],
    activities: [
      { icon: "🎫", title: "Bookings", description: "Coordinated flight, hotel, and itinerary management." },
      { icon: "🧭", title: "Travel Support", description: "Guidance that keeps travel plans on track." },
      { icon: "🏨", title: "Stay Planning", description: "Hotel and transfer planning aligned to business needs." },
      { icon: "📞", title: "Concierge Help", description: "Responsive support before and during travel." }
    ],
    stats: [
      { label: "Years in Business", value: 4, suffix: "+" },
      { label: "Clients", value: 50, suffix: "+" },
      { label: "Projects", value: 120, suffix: "+" },
      { label: "Team Members", value: 30, suffix: "+" }
    ],
    values: [
      { title: "Trust", description: "Reliable support with a calm, service-led approach." },
      { title: "Innovation", description: "Smarter travel planning and coordination." },
      { title: "Growth", description: "Travel services that scale with client needs." },
      { title: "Excellence", description: "Premium attention to detail at every step." }
    ]
  },
  {
    slug: "eg-imports",
    name: "EG Imports",
    tagline: "Import coordination with a strong focus on clarity and compliance.",
    description:
      "EG Imports supports cross-border movement, vendor coordination, and import execution for businesses that need structured trade support.",
    overview:
      "EG Imports helps simplify documentation, communication, and import flow for products moving into target markets.",
    story:
      "Created to support businesses entering or expanding in new markets, EG Imports brings process discipline to import operations.",
    mission:
      "To deliver clear, compliant, and dependable import support.",
    vision:
      "To become a trusted import operations partner for growing businesses.",
    industry: "Imports and Trade",
    foundedYear: "2019",
    headquarters: "Sydney, Australia",
    specialization: "Import coordination and trade support",
    operationalAreas: "Australia, India, UAE",
    logoText: "IM",
    heroImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "EG Imports cargo and trade",
    aboutImage:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
    ],
    details: [
      { label: "Industry", value: "Imports and Trade" },
      { label: "Founded Year", value: "2019" },
      { label: "Headquarters", value: "Sydney, Australia" },
      { label: "Specialization", value: "Import operations" },
      { label: "Operational Areas", value: "AU, IN, UAE" }
    ],
    activities: [
      { icon: "📄", title: "Documentation", description: "Coordinating import paperwork and process flow." },
      { icon: "🚢", title: "Shipment Handling", description: "Managing inbound movement with operational clarity." },
      { icon: "🧾", title: "Compliance", description: "Ensuring trade steps are handled carefully and correctly." },
      { icon: "🤝", title: "Vendor Support", description: "Working closely with suppliers and partners." }
    ],
    stats: [
      { label: "Years in Business", value: 6, suffix: "+" },
      { label: "Clients", value: 70, suffix: "+" },
      { label: "Projects", value: 145, suffix: "+" },
      { label: "Team Members", value: 35, suffix: "+" }
    ],
    values: [
      { title: "Trust", description: "Clear handling of import processes and timelines." },
      { title: "Innovation", description: "Better coordination across cross-border work." },
      { title: "Growth", description: "Support built for expanding trade volumes." },
      { title: "Excellence", description: "Consistent service with a high attention to detail." }
    ]
  },
  {
    slug: "eg-foundations",
    name: "EG Foundations",
    tagline: "Purpose-led initiatives focused on community value and long-term impact.",
    description:
      "EG Foundations supports social programs and impact initiatives that create meaningful, long-term value for communities.",
    overview:
      "EG Foundations is dedicated to designing and supporting community-facing initiatives with clarity, structure, and accountability.",
    story:
      "This arm of the group brings a more direct social focus to the broader company ecosystem, aligning business success with community impact.",
    mission:
      "To support purposeful initiatives that improve lives and strengthen communities.",
    vision:
      "To build a sustainable foundation for positive social outcomes.",
    industry: "Community and Impact",
    foundedYear: "2022",
    headquarters: "Sydney, Australia",
    specialization: "Community programs and impact work",
    operationalAreas: "Australia, India",
    logoText: "FD",
    heroImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "EG Foundations community work",
    aboutImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9f2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
    ],
    details: [
      { label: "Industry", value: "Community and Impact" },
      { label: "Founded Year", value: "2022" },
      { label: "Headquarters", value: "Sydney, Australia" },
      { label: "Specialization", value: "Community initiatives" },
      { label: "Operational Areas", value: "Australia, India" }
    ],
    activities: [
      { icon: "🌱", title: "Community Programs", description: "Structured initiatives aimed at positive social outcomes." },
      { icon: "🎓", title: "Education Support", description: "Programs that help build long-term opportunity and access." },
      { icon: "🤲", title: "Volunteer Coordination", description: "Organizing people and resources around impact work." },
      { icon: "🏛️", title: "Partnerships", description: "Working with organizations that support shared purpose." }
    ],
    stats: [
      { label: "Years in Business", value: 3, suffix: "+" },
      { label: "Clients", value: 30, suffix: "+" },
      { label: "Projects", value: 80, suffix: "+" },
      { label: "Team Members", value: 20, suffix: "+" }
    ],
    values: [
      { title: "Trust", description: "Transparent and responsible community work." },
      { title: "Innovation", description: "Fresh approaches to practical social impact." },
      { title: "Growth", description: "Programs designed to scale meaningful outcomes." },
      { title: "Excellence", description: "Measured execution and long-term stewardship." }
    ]
  }
  ,{
    slug: "eloma-digital",
    name: "Eloma Digital",
    tagline: "Technology-first platforms that simplify operations and unlock insights.",
    description:
      "Eloma Digital builds corporate software and digital products that help businesses work more intelligently and operate with greater clarity.",
    overview:
      "Eloma Digital combines product thinking, engineering discipline, and practical design to create digital tools that support business outcomes.",
    story:
      "What started as an internal technology capability grew into a standalone business focused on helping teams modernize workflows, improve reporting, and deliver better digital experiences.",
    mission:
      "To design digital products that make complex work simpler, faster, and more measurable.",
    vision:
      "To be a trusted digital partner for companies seeking modern, practical transformation.",
    industry: "Digital and Technology",
    foundedYear: "2019",
    headquarters: "Bengaluru, India",
    specialization: "Web platforms, automation, analytics, and custom software",
    operationalAreas: "Global delivery with focus on APAC and North America",
    logoText: "ED",
    heroImage:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Eloma Digital team working",
    website: "https://eloma-digital.example.com",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    aboutImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
    ],
    details: [
      { label: "Industry", value: "Digital and Technology" },
      { label: "Founded Year", value: "2019" },
      { label: "Headquarters", value: "Bengaluru, India" },
      { label: "Specialization", value: "Software and automation" },
      { label: "Operational Areas", value: "APAC, North America" }
    ],
    activities: [
      {
        icon: "🧩",
        title: "Custom Platforms",
        description: "Building business applications tailored to team workflows and goals."
      },
      {
        icon: "📊",
        title: "Analytics",
        description: "Turning operational data into clear, actionable insight.",
      },
      {
        icon: "⚙️",
        title: "Automation",
        description: "Reducing manual work with robust automation and process design."
      },
      {
        icon: "🔒",
        title: "Secure Delivery",
        description: "Practical digital systems built with performance and trust in mind."
      }
    ],
    stats: [
      { label: "Years in Business", value: 6, suffix: "+" },
      { label: "Clients", value: 95, suffix: "+" },
      { label: "Projects", value: 210, suffix: "+" },
      { label: "Team Members", value: 70, suffix: "+" }
    ],
    values: [
      { title: "Trust", description: "Clean delivery and dependable engineering practices." },
      { title: "Innovation", description: "Practical product ideas that solve real business problems." },
      { title: "Growth", description: "Software that supports scale and continuous improvement." },
      { title: "Excellence", description: "Clear standards for quality, performance, and support." }
    ]
  },
  {
    slug: "eloma-travel",
    name: "Eloma Travel",
    tagline: "Seamless travel experiences with premium service and dependable support.",
    description:
      "Eloma Travel offers corporate and leisure travel support with a focus on smooth planning, reliable coordination, and exceptional service.",
    overview:
      "Eloma Travel works with clients to manage bookings, itineraries, and travel coordination with a premium service mindset and careful attention to detail.",
    story:
      "The company was developed to help teams and travelers avoid friction in the planning process. By combining support, expertise, and responsiveness, Eloma Travel makes every journey easier to manage.",
    mission:
      "To create elegant travel solutions that are easy to plan, easy to manage, and easy to trust.",
    vision:
      "To be the preferred travel partner for professionals and organizations seeking effortless service.",
    industry: "Travel and Tourism",
    foundedYear: "2020",
    headquarters: "Melbourne, Australia",
    specialization: "Corporate travel, holiday planning, and itinerary support",
    operationalAreas: "Australia, Singapore, UAE, UK",
    logoText: "ET",
    heroImage:
      "https://images.unsplash.com/photo-1502920917128-1aa500764b6b?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Eloma Travel destination planning",
    website: "https://eloma-travel.example.com",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    aboutImage:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494475673543-6a6a27143da6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ],
    details: [
      { label: "Industry", value: "Travel and Tourism" },
      { label: "Founded Year", value: "2020" },
      { label: "Headquarters", value: "Melbourne, Australia" },
      { label: "Specialization", value: "Corporate and leisure travel" },
      { label: "Operational Areas", value: "AU, SG, UAE, UK" }
    ],
    activities: [
      {
        icon: "✈️",
        title: "Trip Planning",
        description: "Thoughtful planning support for business and leisure itineraries."
      },
      {
        icon: "🧳",
        title: "Travel Coordination",
        description: "Managing bookings, schedules, and travel details in one place."
      },
      {
        icon: "🌍",
        title: "Destination Support",
        description: "Reliable help for travelers moving across regions and time zones."
      },
      {
        icon: "📞",
        title: "Concierge Service",
        description: "Premium service support before, during, and after each trip."
      }
    ],
    stats: [
      { label: "Years in Business", value: 5, suffix: "+" },
      { label: "Clients", value: 75, suffix: "+" },
      { label: "Projects", value: 140, suffix: "+" },
      { label: "Team Members", value: 40, suffix: "+" }
    ],
    values: [
      { title: "Trust", description: "A dependable travel partner with a service-first mindset." },
      { title: "Innovation", description: "Smarter travel support that reduces friction and saves time." },
      { title: "Growth", description: "Travel solutions that scale with teams and changing needs." },
      { title: "Excellence", description: "Elegant service delivered with care and attention to detail." }
    ]
  }
];

export function getCompanyBySlug(slug: string) {
  return companies.find((company) => company.slug === slug);
}
