// Placeholder content - replace with official group data.
export const groupName = "Eloma Group";

export interface Division {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  video: string;
  poster: string;
  capabilities: string[];
  metric: { value: string; label: string };
  accent: string;
}

export const DIVISIONS: Division[] = [
  {
    id: 'callcenter',
    index: '01',
    name: 'Eloma Call Centre',
    tagline: 'Real People. Real Connections. Real Results.',
    description:
      'A people-first BPO division building relationships, not just answering calls — multi-channel customer experience engineered around trust and growth.',
    video: 'https://videos.pexels.com/video-files/3379503/3379503-sd_640_360_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    capabilities: ['24/7 Support', 'Omnichannel CX', 'Customer Success', 'Inside Sales'],
    metric: { value: '', label: 'Always-on service' },
    accent: '#22b98c',
  },
  {
    id: 'imports',
    index: '02',
    name: 'Eloma Imports',
    tagline: 'Global Sourcing. Reliable Supply.',
    description:
      'Global sourcing and trade — connecting markets with dependable supply, customs expertise and end-to-end distribution across borders.',
    video: 'https://videos.pexels.com/video-files/4480993/4480993-sd_640_360_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80',
    capabilities: ['Global Sourcing', 'Customs & Trade', 'Quality Assurance', 'Distribution'],
    metric: { value: '', label: 'Markets connected' },
    accent: '#2fc79b',
  },
  {
    id: 'it',
    index: '03',
    name: 'Eloma IT Infrastructure',
    tagline: 'Powering Performance. Building the Future.',
    description:
      'Robust, secure-by-design infrastructure that drives efficiency and innovation — the digital backbone powering every company in the group and beyond.',
    video: 'https://videos.pexels.com/video-files/7974/7974-sd_640_360_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    capabilities: ['Cloud & DevOps', 'Cybersecurity', 'High Availability', 'Managed Services'],
    metric: { value: '', label: 'Uptime delivered' },
    accent: '#37d6a6',
  },
  {
    id: 'supplychain',
    index: '04',
    name: 'Eloma Supply Chain',
    tagline: 'Smarter. Stronger. More Sustainable.',
    description:
      'Resilient, technology-led logistics — freight, warehousing and distribution built on collaboration and sustainability for a moving world.',
    video: 'https://videos.pexels.com/video-files/3380803/3380803-sd_640_360_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    capabilities: ['Freight & Logistics', 'Warehousing', 'Distribution', 'Sustainable Ops'],
    metric: { value: '', label: 'Logistics hubs' },
    accent: '#19a47c',
  },
  {
    id: 'travel',
    index: '05',
    name: 'Eloma Travel',
    tagline: 'Explore. Experience. Enjoy.',
    description:
      'A global travel division crafting seamless journeys — from corporate mobility to bespoke leisure — connecting people to places and unforgettable moments.',
    video: 'https://videos.pexels.com/video-files/3191381/3191381-sd_640_360_30fps.mp4',
    poster: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    capabilities: ['Corporate Mobility', 'Leisure & Luxury', 'Worldwide Network', 'Concierge Support'],
    metric: { value: '', label: 'Destinations served' },
    accent: '#16a079',
  },
];

// "Why We Exist" timeline stages (Section 06)
export const TIMELINE = [
  {
    year: 'The Root',
    title: 'A single vision',
    body: 'Eloma began with a conviction: that businesses grow strongest when they share roots — common values, shared infrastructure, and a long-term horizon.',
  },
  {
    year: 'The Branches',
    title: 'Four pillars, one trunk',
    body: 'Travel, technology, customer experience and logistics grew as branches of one organism — independent in craft, united in standard.',
  },
  {
    year: 'The Canopy',
    title: 'A global ecosystem',
    body: 'Today the group spans markets and continents, an interconnected canopy where each company makes the others stronger.',
  },
  {
    year: 'The Horizon',
    title: 'Built for generations',
    body: "We don't build for the quarter. We build for the decade — investing in people, sustainability and ventures that outlast us.",
  },
];

export const navAbout: Array<{ type: "header" | "item"; label: string; href?: string }> = [
  { type: "item", label: "About Us", href: "/about" },
  { type: "item", label: "Blog", href: "/blog" },
  { type: "item", label: "Newsroom", href: "/newsroom" },
  { type: "item", label: "Partners", href: "/partners" }
];

export const navBusinesses: Array<{ type: "header" | "item"; label: string; href?: string }> = [
  { type: "header", label: "Business" },
  { type: "item", label: "Call Centre", href: "/business/call-centre" },
  { type: "item", label: "Imports", href: "/business/imports" },
  { type: "item", label: "IT Infrastructure", href: "/business/it-infrastructure" },
  { type: "item", label: "Supply Chain", href: "/business/supply-chain" },
  { type: "item", label: "Travel", href: "/business/travel" },
  { type: "header", label: "Companies" },
  { type: "item", label: "EG Digital Australia", href: "/company/eg-digital-australia" },
  { type: "item", label: "EG Foundations", href: "/company/eg-foundations" },
  { type: "item", label: "EG Imports", href: "/company/eg-imports" },
  { type: "item", label: "EG Transport", href: "/company/eg-transport" },
  { type: "item", label: "EG Travels", href: "/company/eg-travels" }
];

export const navSustainability: Array<{ type: "header" | "item"; label: string; href?: string }> = [
  { type: "header", label: "Sustainability" },
  { type: "item", label: "Environmental Responsibility", href: "/company/sustainability#environment" },
  { type: "item", label: "Sustainability Initiatives", href: "/company/sustainability" },
  { type: "item", label: "Reports & Updates", href: "/company/reports" }
];

export const navMedia = [
  "Leadership Messages",
  "Connecting Australia",
  "News & Updates",
  "Media Kit"
];

export const navCareers = [
  "Work With Us",
  "Current Openings",
  "Life at Eloma"
];

export const navContact = [
  "Contact form",
  "Corporate office",
  "Branch locations"
];

export const navServices = [
  "Eco-Conscious Operations",
  "Ethical Practices",
  "Smarter Technologies",
  "Lower Carbon Footprint",
  "Responsible Partnerships",
  "Resilient Future"
];

export const navWhyUs = [
  "About Us",
  "Case Studies",
  "Blogs",
  "Networks and Partners",
  "Values",
  "FAQ",
  "Latest News"
];

export const navIndustries = [
  "Transportation and Logistics",
  "Digital and Technology",
  "Security and Risk Management",
  "Customer Support and Call Center",
  "Travel and Tourism"
];

export const navLocations = [
  {
    country: "Australia",
    cities: ["Sydney", "Melbourne", "Adelaide", "Perth", "Brisbane"]
  },
  {
    country: "India",
    cities: ["Mumbai", "Bengaluru", "Delhi"]
  },
  {
    country: "USA",
    cities: ["New York", "Chicago", "Dallas"]
  },
  {
    country: "Canada",
    cities: ["Toronto"]
  },
  {
    country: "China",
    cities: ["Beijing"]
  },
  {
    country: "UK",
    cities: ["London"]
  },
  {
    country: "UAE",
    cities: ["Dubai"]
  },
  {
    country: "Singapore",
    cities: ["Singapore"]
  }
];

export const subsidiaries = [
  {
    name: "Eloma Logistics",
    industry: "Transportation and Logistics",
    description: "Integrated transport and logistics solutions built for reliability and scale.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Eloma Digital",
    industry: "Digital and Technology",
    description: "Technology-driven platforms that power smarter operations and insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Eloma Security",
    industry: "Security and Risk Management",
    description: "Virtual security and risk solutions designed for safety and trust.",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Eloma Travel",
    industry: "Travel and Tourism",
    description: "Travel services focused on seamless experiences and trusted support.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Eloma Customer Solutions",
    industry: "Customer Support",
    description: "Customer support and call center services that strengthen relationships.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Eloma Energy",
    industry: "Renewable Energy",
    description: "Sustainable power generation and clean energy solutions for a greener future.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Eloma Health",
    industry: "Healthcare Services",
    description: "Innovative health tech and patient care platforms improving outcomes worldwide.",
    image: "https://images.unsplash.com/photo-1581091012184-7e0cdfbbf62b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Eloma Finance",
    industry: "Financial Services",
    description: "Fintech solutions delivering secure, fast, and inclusive financial services.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Eloma Media",
    industry: "Media & Entertainment",
    description: "Creative content production and distribution across digital channels.",
    image: "https://images.unsplash.com/photo-1518515097036-f1b8a0e7f03a?auto=format&fit=crop&w=1200&q=80"
  }
];

export const services = [
  {
    title: "Eco-Conscious Operations",
    description: "Reducing environmental impact across logistics and digital processes."
  },
  {
    title: "Ethical Practices",
    description: "Responsible governance and transparent business standards."
  },
  {
    title: "Smarter Technologies",
    description: "Innovation that drives efficiency and smarter operations."
  },
  {
    title: "Lower Carbon Footprint",
    description: "Strategic improvements focused on measurable reductions."
  },
  {
    title: "Responsible Partnerships",
    description: "Collaboration that supports sustainable impact and growth."
  },
  {
    title: "Resilient Future",
    description: "Long-term value for businesses, communities, and the planet."
  }
];

export const industries = [
  "Transportation and Logistics",
  "Digital and Technology",
  "Security and Risk Management",
  "Customer Support and Call Center",
  "Travel and Tourism"
];

export const stats = [
  { label: "Business verticals", value: "4+" },
  { label: "Countries present", value: "8" },
  { label: "Industries served", value: "Multiple" },
  { label: "Unified vision", value: "1" }
];

export const caseStudies = [
  {
    title: "Visionary Leadership",
    description: "Leadership focused on building a multi-business ecosystem designed for long-term impact.",
    category: "Leadership",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Founder Message",
    description:
      "Eloma Group was built with a vision to go beyond a single business - to create an ecosystem where innovation, efficiency, and sustainability drive real impact.",
    category: "R J, Founder",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Unified Vision",
    description: "One connected group aligning purpose, performance, and sustainability across industries.",
    category: "Group Vision",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80"
  }
  ,
  {
    title: "Sustainable Operations",
    description: "Implementing greener logistics and energy-efficient operations to reduce environmental impact.",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Technology Transformation",
    description: "Leveraging digital platforms to optimise supply chains and improve customer experiences.",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Community Impact",
    description: "Programs focused on uplifting communities and creating shared economic value.",
    category: "Impact",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Operational Excellence",
    description: "Continuous improvement in processes to deliver reliable, scalable services for clients.",
    category: "Operations",
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80"
  }
];

export const blogPosts = [
  {
    title: "Connecting Cities",
    description:
      "We make distance feel smaller by building smooth, reliable connections across regions.",
    category: "Motto",
    date: "May 14, 2026",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Connecting Businesses",
    description:
      "We help services reach people faster and keep communication clear and easy.",
    category: "Connection",
    date: "April 28, 2026",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Connecting Opportunities",
    description:
      "When people and businesses are well connected, work becomes easier and growth becomes faster.",
    category: "Australia",
    date: "April 10, 2026",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  }
];
