export type BusinessStat = {
  label: string;
  value: number;
  suffix?: string;
};

export type BusinessInfoCard = {
  label: string;
  value: string;
};

export type BusinessService = {
  icon: string;
  title: string;
  description: string;
};

export type BusinessProfile = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutImage?: string;
  services: BusinessService[];
  whyChooseUs: Array<{ title: string; description: string }>;
  process: Array<{ step: string; description: string }>;
  stats: BusinessStat[];
  gallery: string[];
  details: BusinessInfoCard[];
  heroImage: string;
  heroImageAlt: string;
};

export const businesses: BusinessProfile[] = [
  {
    slug: "supply-chain",
    name: "Supply Chain Solutions",
    tagline: "Reliable supply-chain operations built for clarity, control, and scale.",
    description:
      "Our supply-chain business helps organizations coordinate movement, inventory, and delivery with a disciplined, service-led approach.",
    aboutTitle: "About Supply Chain Solutions",
    aboutDescription:
      "We design practical supply-chain support that helps businesses improve flow, reduce friction, and maintain stronger operational visibility across the network.",
    aboutImage:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80",
    services: [
      { icon: "🚚", title: "Transport Coordination", description: "End-to-end shipment and route coordination for dependable movement." },
      { icon: "📦", title: "Warehouse Support", description: "Inventory handling and storage flow designed for efficiency." },
      { icon: "🛰️", title: "Tracking & Visibility", description: "Operational updates and visibility for better decision-making." },
      { icon: "🤝", title: "Client Operations", description: "Dedicated support for daily coordination and service continuity." },
      { icon: "⚙️", title: "Process Improvement", description: "Continuous refinement to improve performance and reduce delays." },
      { icon: "🌍", title: "Regional Delivery", description: "Support across key routes and markets with flexible execution." }
    ],
    whyChooseUs: [
      { title: "Expertise", description: "Experienced teams with practical supply-chain knowledge." },
      { title: "Reliable Operations", description: "Clear communication and stable execution across the workflow." },
      { title: "Innovation", description: "Smarter tools and process design that improve outcomes." },
      { title: "Customer Support", description: "Responsive coordination focused on service quality." }
    ],
    process: [
      { step: "Consultation", description: "Understand the business need, scope, and expected outcomes." },
      { step: "Planning", description: "Build the operating plan, timelines, and resources." },
      { step: "Execution", description: "Deliver the service with ongoing communication and control." },
      { step: "Delivery", description: "Finalize the work and ensure the expected output is achieved." },
      { step: "Support", description: "Continue support and improvements after launch or delivery." }
    ],
    stats: [
      { label: "Years Experience", value: 10, suffix: "+" },
      { label: "Clients Served", value: 140, suffix: "+" },
      { label: "Projects Delivered", value: 420, suffix: "+" },
      { label: "Team Members", value: 110, suffix: "+" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    details: [
      { label: "Industry", value: "Supply Chain" },
      { label: "Scope", value: "Movement, inventory, and delivery" },
      { label: "Focus", value: "Operations and service quality" },
      { label: "Markets", value: "Australia, India, Singapore" }
    ],
    heroImage:
      "https://images.unsplash.com/photo-1506850571458-74d0f19f4f91?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Supply chain operations"
  },
  {
    slug: "it-infrastructure",
    name: "IT Infrastructure",
    tagline: "Secure, scalable digital foundations for modern businesses.",
    description:
      "Our IT infrastructure business delivers dependable technical support, system setup, and operational technology for growing organizations.",
    aboutTitle: "About IT Infrastructure",
    aboutDescription:
      "We help businesses build stable technology environments with the right tools, support, and operational discipline to keep systems running smoothly.",
    aboutImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    services: [
      { icon: "🖥️", title: "System Setup", description: "Infrastructure configuration built for reliability and scale." },
      { icon: "🔐", title: "Security Support", description: "Practical controls and monitoring for safer operations." },
      { icon: "☁️", title: "Cloud Enablement", description: "Cloud-ready environments that support flexibility and growth." },
      { icon: "🛠️", title: "Maintenance", description: "Ongoing support to keep systems stable and current." },
      { icon: "📡", title: "Network Operations", description: "Connectivity and performance support across the environment." },
      { icon: "🤖", title: "Automation", description: "Automation that reduces manual effort and improves consistency." }
    ],
    whyChooseUs: [
      { title: "Expertise", description: "Experienced technical teams with practical implementation knowledge." },
      { title: "Reliable Operations", description: "Stable environments built for continuity and support." },
      { title: "Innovation", description: "Modern tools and scalable architecture choices." },
      { title: "Customer Support", description: "Fast, responsive help when systems need attention." }
    ],
    process: [
      { step: "Consultation", description: "Review business goals, systems, and current constraints." },
      { step: "Planning", description: "Define architecture, support scope, and delivery plan." },
      { step: "Execution", description: "Deploy, configure, and validate the environment." },
      { step: "Delivery", description: "Handover documentation and operational readiness." },
      { step: "Support", description: "Provide maintenance, monitoring, and improvement." }
    ],
    stats: [
      { label: "Years Experience", value: 7, suffix: "+" },
      { label: "Clients Served", value: 95, suffix: "+" },
      { label: "Projects Delivered", value: 260, suffix: "+" },
      { label: "Team Members", value: 65, suffix: "+" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    ],
    details: [
      { label: "Industry", value: "IT Infrastructure" },
      { label: "Scope", value: "Systems and technical operations" },
      { label: "Focus", value: "Reliability and support" },
      { label: "Markets", value: "Australia, APAC" }
    ],
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "IT infrastructure team"
  },
  {
    slug: "call-centre",
    name: "Call Centre Services",
    tagline: "Responsive customer support with a strong operational focus.",
    description:
      "Our call centre business provides professional support services that strengthen communication, customer experience, and operational continuity.",
    aboutTitle: "About Call Centre Services",
    aboutDescription:
      "We manage support operations with clear processes, quality assurance, and a service-led approach that helps businesses stay connected to their customers.",
    aboutImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    services: [
      { icon: "🎧", title: "Inbound Support", description: "Customer calls managed with care, structure, and consistency." },
      { icon: "📞", title: "Outbound Campaigns", description: "Call campaigns planned for clarity and measurable outcomes." },
      { icon: "💬", title: "Multi-channel Support", description: "Support across voice, chat, and email touchpoints." },
      { icon: "📋", title: "Quality Monitoring", description: "Performance checks and coaching that improve service quality." },
      { icon: "🧑‍💼", title: "Workforce Support", description: "Team planning and operations to maintain service levels." },
      { icon: "⚡", title: "Escalation Handling", description: "Clear processes for managing sensitive customer issues." }
    ],
    whyChooseUs: [
      { title: "Expertise", description: "Skilled support teams with service delivery experience." },
      { title: "Reliable Operations", description: "Defined processes that keep response quality consistent." },
      { title: "Innovation", description: "Smarter tools that improve customer handling and reporting." },
      { title: "Customer Support", description: "Customer-first communication and responsiveness." }
    ],
    process: [
      { step: "Consultation", description: "Understand contact volumes, goals, and service expectations." },
      { step: "Planning", description: "Design workflows, scripts, and quality controls." },
      { step: "Execution", description: "Run support operations with active supervision." },
      { step: "Delivery", description: "Report on results and service outcomes." },
      { step: "Support", description: "Optimize the service based on feedback and performance." }
    ],
    stats: [
      { label: "Years Experience", value: 9, suffix: "+" },
      { label: "Clients Served", value: 110, suffix: "+" },
      { label: "Projects Delivered", value: 300, suffix: "+" },
      { label: "Team Members", value: 150, suffix: "+" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
    ],
    details: [
      { label: "Industry", value: "Customer Support" },
      { label: "Scope", value: "Voice and digital support" },
      { label: "Focus", value: "Service quality" },
      { label: "Markets", value: "Australia, India" }
    ],
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Call centre team"
  },
  {
    slug: "travel",
    name: "Travel Services",
    tagline: "Premium travel support for business and leisure journeys.",
    description:
      "Our travel business helps companies and individuals plan and manage travel with simple, elegant, and dependable support.",
    aboutTitle: "About Travel Services",
    aboutDescription:
      "We coordinate itineraries, bookings, and support so travelers can focus on the journey while we handle the details.",
    aboutImage:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
    services: [
      { icon: "✈️", title: "Trip Planning", description: "Corporate and leisure travel planning tailored to need." },
      { icon: "🏨", title: "Hotel Booking", description: "Accommodation support with a premium service mindset." },
      { icon: "🧳", title: "Itinerary Management", description: "Detailed trip organization for a smoother travel experience." },
      { icon: "🌍", title: "Destination Support", description: "Regional support across multiple destinations and routes." },
      { icon: "📞", title: "Concierge Help", description: "Responsive support before and during travel." },
      { icon: "🗓️", title: "Travel Coordination", description: "Booking and scheduling coordination from start to finish." }
    ],
    whyChooseUs: [
      { title: "Expertise", description: "Travel planning knowledge built around service quality." },
      { title: "Reliable Operations", description: "Dependable support and coordination at every stage." },
      { title: "Innovation", description: "Smarter booking and itinerary management workflows." },
      { title: "Customer Support", description: "Responsive help when plans need to change quickly." }
    ],
    process: [
      { step: "Consultation", description: "Understand the trip purpose, preferences, and budget." },
      { step: "Planning", description: "Build the itinerary, bookings, and support plan." },
      { step: "Execution", description: "Confirm and manage the travel arrangements." },
      { step: "Delivery", description: "Provide a smooth travel handover and coordination." },
      { step: "Support", description: "Continue help throughout the trip lifecycle." }
    ],
    stats: [
      { label: "Years Experience", value: 5, suffix: "+" },
      { label: "Clients Served", value: 75, suffix: "+" },
      { label: "Projects Delivered", value: 160, suffix: "+" },
      { label: "Team Members", value: 35, suffix: "+" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494475673543-6a6a27143da6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ],
    details: [
      { label: "Industry", value: "Travel" },
      { label: "Scope", value: "Corporate and leisure" },
      { label: "Focus", value: "Planning and support" },
      { label: "Markets", value: "Australia, Singapore, UAE" }
    ],
    heroImage:
      "https://images.unsplash.com/photo-1502920917128-1aa500764b6b?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Travel planning"
  }
  ,
  {
    slug: "imports",
    name: "Import Operations",
    tagline: "Structured import coordination with clarity, compliance, and dependable execution.",
    description:
      "Our import operations business supports cross-border movement, documentation, and vendor coordination for businesses that need reliable trade support.",
    aboutTitle: "About Import Operations",
    aboutDescription:
      "We help businesses move imported goods with less friction by combining process discipline, clear communication, and practical operational control.",
    aboutImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    services: [
      { icon: "📄", title: "Documentation", description: "Organizing import paperwork and trade requirements with care." },
      { icon: "🚢", title: "Shipment Handling", description: "Coordinating inbound movement from origin to destination." },
      { icon: "🧾", title: "Compliance Support", description: "Keeping import steps clear, structured, and aligned to process." },
      { icon: "🤝", title: "Vendor Coordination", description: "Working closely with suppliers and partners for smooth handoffs." },
      { icon: "🛠️", title: "Process Control", description: "Improving accuracy and visibility across the import flow." },
      { icon: "🌍", title: "Trade Support", description: "Flexible support across key import markets and routes." }
    ],
    whyChooseUs: [
      { title: "Expertise", description: "Trade and logistics knowledge applied to practical operations." },
      { title: "Reliable Operations", description: "Consistent handling of import tasks and timelines." },
      { title: "Innovation", description: "Better coordination and workflow visibility." },
      { title: "Customer Support", description: "Responsive support when import plans change." }
    ],
    process: [
      { step: "Consultation", description: "Review the import scope, product type, and target timelines." },
      { step: "Planning", description: "Map the process, paperwork, and coordination steps." },
      { step: "Execution", description: "Move shipments with ongoing control and updates." },
      { step: "Delivery", description: "Complete handover and confirm the import outcome." },
      { step: "Support", description: "Provide follow-up and operational support as needed." }
    ],
    stats: [
      { label: "Years Experience", value: 6, suffix: "+" },
      { label: "Clients Served", value: 85, suffix: "+" },
      { label: "Projects Delivered", value: 180, suffix: "+" },
      { label: "Team Members", value: 40, suffix: "+" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    details: [
      { label: "Industry", value: "Imports and Trade" },
      { label: "Scope", value: "Import operations and coordination" },
      { label: "Focus", value: "Compliance and execution" },
      { label: "Markets", value: "Australia, India, UAE" }
    ],
    heroImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Import operations"
  }
];

export function getBusinessBySlug(slug: string) {
  return businesses.find((business) => business.slug === slug);
}
