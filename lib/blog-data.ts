import type { StaticImageData } from "next/image";
import travelImage from "@/assset/blog/travel.png";
import supplyChainImage from "@/assset/blog/supply chain.png";
import itImage from "@/assset/blog/IT.png";
import callCenterImage from "@/assset/blog/call center.png";

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  image: StaticImageData;
  author: string;
  category?: string;
  date: string;
  excerpt: string;
  content: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export const blogCategories = [
  "All Blogs",
  "Supply Chain & Logistics",
  "IT Infrastructure & Digital Transformation",
  "Customer Support / Call Centre",
  "Travel & Mobility",
  "Imports & Global Trade"
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "top-benefits-of-school-management-software-for-schools-in-2026",
    title: "Top Benefits of School Management Software for Schools in 2026",
    image: travelImage,
    author: "Admin",
    date: "April 28, 2026",
    excerpt:
      "Running a school today is not the same as it was a few years ago. Modern management tools help teams stay organized, reduce manual work, and keep communication smooth.",
    content:
      "Modern school management software helps institutions centralize operations, automate repetitive work, and improve communication across teams. It reduces manual errors, improves visibility, and gives administrators a clearer view of daily tasks.",
    sections: [
      {
        heading: "Why schools are upgrading now",
        body: "Paper-based processes and disconnected systems slow teams down. Schools are adopting digital systems to manage admissions, attendance, messaging, and reporting from one place."
      },
      {
        heading: "Operational benefits",
        body: "Better workflow automation, faster access to records, and cleaner communication help staff save time and focus more on students and outcomes."
      },
      {
        heading: "What to look for",
        body: "A strong platform should be easy to use, scalable, and flexible enough to support school growth without adding complexity."
      }
    ]
  },
  {
    id: 2,
    slug: "tips-for-managing-student-records-using-your-school-management-system",
    title: "Tips For Managing Student Records Using Your School Management System",
    image: supplyChainImage,
    author: "Admin",
    date: "August 20, 2024",
    excerpt:
      "Managing student records efficiently is a cornerstone of successful school operations. The right system makes information easy to find, update, and secure.",
    content:
      "Student records need to be accurate, searchable, and secure. A modern school management system helps organize profiles, attendance, grades, and communication history in one accessible dashboard.",
    sections: [
      {
        heading: "Keep records structured",
        body: "Use consistent naming, required fields, and clear categories so every student profile stays reliable over time."
      },
      {
        heading: "Control access",
        body: "Limit access to sensitive data and use role-based permissions so staff only see the information they need."
      },
      {
        heading: "Review regularly",
        body: "Schedule periodic audits to correct outdated data, avoid duplication, and keep reporting accurate."
      }
    ]
  },
  {
    id: 3,
    slug: "revolutionizing-education-management-the-game-changing-school-management-software",
    title: "Revolutionizing Education Management: The Game-Changing School Management Software",
    image: itImage,
    author: "Admin",
    date: "June 07, 2024",
    excerpt:
      "Technology is reshaping how schools operate every day. A well-designed platform can simplify administration, improve visibility, and support better decision-making.",
    content:
      "The right education platform can transform how teams work by combining operational tools, reporting, and communication in one environment. It creates a more predictable rhythm for staff and leadership.",
    sections: [
      {
        heading: "Connected operations",
        body: "A single system reduces the need to switch between tools and helps departments work from a shared source of truth."
      },
      {
        heading: "Better decisions",
        body: "Dashboards and analytics make it easier to spot trends and respond quickly to attendance, performance, or engagement issues."
      },
      {
        heading: "Improved collaboration",
        body: "Teachers, staff, and administrators can coordinate more effectively when communication and records live in one place."
      }
    ]
  },
  {
    id: 4,
    slug: "revolutionizing-education-management-the-power-of-school-management-software",
    title: "Revolutionizing Education Management: The Power of School Management Software",
    image: callCenterImage,
    author: "Admin",
    date: "June 06, 2024",
    excerpt:
      "In a fast-moving education landscape, keeping pace with administrative demands requires smart tools built for efficiency, clarity, and scale.",
    content:
      "School management software gives teams the structure they need to handle everyday tasks without losing visibility. It brings together administration, messaging, and performance tracking.",
    sections: [
      {
        heading: "Reduce repetitive work",
        body: "Automation helps staff spend less time on manual entry and more time on meaningful support for students."
      },
      {
        heading: "Support growth",
        body: "As schools expand, the software should continue to perform without requiring a complete process overhaul."
      },
      {
        heading: "Deliver consistency",
        body: "Standardized workflows make daily operations easier to understand and easier to train across teams."
      }
    ]
  },
  {
    id: 5,
    slug: "level-up-your-schools-game-conquering-the-quest-for-the-right-educational-erp",
    title: "Level Up Your School's Game: Conquering the Quest for the Right Educational ERP",
    image: travelImage,
    author: "Admin",
    date: "June 05, 2024",
    excerpt:
      "Finding the right ERP means balancing usability, reporting, automation, and support. Schools need a system that grows with them and stays simple for staff.",
    content:
      "An education ERP should do more than store information. It should connect departments, improve transparency, and create a dependable backbone for school operations.",
    sections: [
      {
        heading: "Match the workflow",
        body: "Choose a system that reflects how your school actually works instead of forcing teams into awkward processes."
      },
      {
        heading: "Think long term",
        body: "Look for flexibility, integrations, and support that can handle future needs without major disruption."
      },
      {
        heading: "Keep adoption easy",
        body: "The best ERP is one that staff can learn quickly and use confidently every day."
      }
    ]
  },
  {
    id: 6,
    slug: "revolutionize-your-school-with-an-efficient-management-system",
    title: "Revolutionize Your School with an Efficient Management System",
    image: supplyChainImage,
    author: "Admin",
    date: "May 28, 2024",
    excerpt:
      "A reliable management system reduces friction across operations, helping education teams spend less time on repetitive tasks and more time on outcomes.",
    content:
      "An efficient management system gives schools a practical foundation for scheduling, reporting, communication, and operational control. It simplifies work for every department.",
    sections: [
      {
        heading: "Streamline daily tasks",
        body: "Routine workflows become easier when forms, approvals, and records are all accessible from one platform."
      },
      {
        heading: "Improve coordination",
        body: "Clear visibility across departments helps teams respond faster and reduce delays."
      },
      {
        heading: "Build consistency",
        body: "Repeatable processes create better outcomes and reduce confusion across the school year."
      }
    ]
  },
  {
    id: 7,
    slug: "streamline-your-school-operations-with-cutting-edge-school-management-software",
    title: "Streamline Your School Operations with Cutting-Edge School Management Software",
    image: itImage,
    author: "Admin",
    date: "May 27, 2024",
    excerpt:
      "When operations are streamlined, staff can work faster and with fewer errors. The right platform makes daily tasks more predictable and efficient.",
    content:
      "Cutting-edge school software supports faster workflows, cleaner reporting, and smoother communication. That combination helps schools reduce bottlenecks and maintain control.",
    sections: [
      {
        heading: "Speed up workflows",
        body: "Digitized processes shorten turnaround times for approvals, updates, and communication."
      },
      {
        heading: "Reduce errors",
        body: "Centralized data and validation rules help prevent duplicate records and missing information."
      },
      {
        heading: "Keep teams aligned",
        body: "A shared system gives everyone the same view of tasks, schedules, and student information."
      }
    ]
  },
  {
    id: 8,
    slug: "revolutionizing-education-exploring-the-benefits-of-school-management-software",
    title: "Revolutionizing Education: Exploring the Benefits of School Management Software",
    image: callCenterImage,
    author: "Admin",
    category: "Supply Chain & Logistics",
    date: "May 22, 2024",
    excerpt:
      "Schools benefit from tools that improve visibility, simplify collaboration, and support better communication across teams, students, and parents.",
    content:
      "This post explores the broad value of school management platforms, including better coordination, transparent reporting, and easier access to student data.",
    sections: [
      {
        heading: "Visibility across the school",
        body: "Leadership can monitor key operational areas without relying on disconnected spreadsheets or manual updates."
      },
      {
        heading: "Communication that flows",
        body: "Parents, teachers, and administrators benefit from more immediate and more reliable information exchange."
      },
      {
        heading: "A stronger daily rhythm",
        body: "The school day becomes easier to manage when tools support routine work instead of slowing it down."
      }
    ]
  },
  {
    id: 9,
    slug: "warehouse-management-best-practices-for-efficient-operations",
    title: "Warehouse Management: Best Practices for Efficient Operations",
    image: supplyChainImage,
    author: "Admin",
    category: "Supply Chain & Logistics",
    date: "May 01, 2025",
    excerpt:
      "Warehouse management strategies to improve throughput, reduce errors, and optimize space usage across modern fulfilment centers.",
    content:
      "Effective warehouse management depends on clear layouts, disciplined inventory control, and technology that keeps goods moving efficiently from receiving to dispatch.",
    sections: [
      {
        heading: "Layout and flow",
        body: "A strong warehouse layout reduces travel time, cuts congestion, and supports quicker picking and packing."
      },
      {
        heading: "Inventory accuracy",
        body: "Real-time updates and regular cycle counts help maintain accurate stock levels and avoid fulfillment delays."
      },
      {
        heading: "Operational discipline",
        body: "Clear SOPs and measurable KPIs keep teams aligned and help operations stay consistent under pressure."
      }
    ]
  },
  {
    id: 10,
    slug: "freight-and-transportation-managing-costs-and-reliability",
    title: "Freight & Transportation: Managing Costs and Reliability",
    image: supplyChainImage,
    author: "Admin",
    category: "Supply Chain & Logistics",
    date: "May 03, 2025",
    excerpt:
      "Approaches to freight planning, carrier selection, and real-time tracking that balance cost with on-time performance.",
    content:
      "Freight and transportation planning works best when cost control and service levels are managed together. The right routing, partner mix, and visibility tools make the difference.",
    sections: [
      {
        heading: "Route planning",
        body: "Optimizing routes reduces fuel costs and improves the predictability of deliveries."
      },
      {
        heading: "Carrier performance",
        body: "Monitoring carrier reliability helps shippers maintain service quality and make better partner decisions."
      },
      {
        heading: "Track in transit",
        body: "Live tracking gives teams more control over exceptions and customer communication."
      }
    ]
  },
  {
    id: 11,
    slug: "inventory-optimization-balancing-service-and-capital",
    title: "Inventory Optimization: Balancing Service and Capital",
    image: supplyChainImage,
    author: "Admin",
    category: "Supply Chain & Logistics",
    date: "May 05, 2025",
    excerpt:
      "Techniques for reducing stockouts and excess inventory through forecasting, safety stock, and replenishment policies.",
    content:
      "Inventory optimization is about finding the right balance between availability and cost. Too much stock ties up capital, while too little can damage service levels.",
    sections: [
      {
        heading: "Forecast smarter",
        body: "Reliable demand signals help teams plan replenishment with more confidence and less waste."
      },
      {
        heading: "Set safety stock properly",
        body: "Buffer stock should reflect lead times, volatility, and service expectations rather than a fixed guess."
      },
      {
        heading: "Review by segment",
        body: "Different SKUs need different treatment based on demand patterns, value, and criticality."
      }
    ]
  },
  {
    id: 12,
    slug: "procurement-strategic-sourcing-for-resilient-supply-chains",
    title: "Procurement: Strategic Sourcing for Resilient Supply Chains",
    image: supplyChainImage,
    author: "Admin",
    category: "Supply Chain & Logistics",
    date: "May 07, 2025",
    excerpt:
      "Best practices in supplier selection, contract management, and risk mitigation to ensure continuity and value.",
    content:
      "Strategic procurement strengthens supply chains by building supplier diversity, improving contract terms, and reducing exposure to disruption.",
    sections: [
      {
        heading: "Supplier selection",
        body: "Evaluate suppliers on capability, resilience, service quality, and total value rather than price alone."
      },
      {
        heading: "Contract clarity",
        body: "Clear service levels and escalation paths make supplier relationships easier to manage."
      },
      {
        heading: "Risk planning",
        body: "Backup sourcing and scenario planning help maintain continuity when the market shifts."
      }
    ]
  },
  {
    id: 13,
    slug: "last-mile-delivery-improving-the-customer-experience",
    title: "Last-Mile Delivery: Improving the Customer Experience",
    image: supplyChainImage,
    author: "Admin",
    category: "Supply Chain & Logistics",
    date: "May 09, 2025",
    excerpt:
      "Tactics and technologies for lowering last-mile costs while meeting fast, reliable delivery expectations.",
    content:
      "Last-mile delivery shapes the customer experience more than almost any other logistics step. It must balance speed, cost, and communication.",
    sections: [
      {
        heading: "Delivery visibility",
        body: "Customers want to know where their order is and when it will arrive."
      },
      {
        heading: "Cost efficiency",
        body: "Batching, route optimization, and smarter fulfillment networks help reduce expensive final-mile spend."
      },
      {
        heading: "Customer communication",
        body: "Proactive updates reduce friction and improve trust when delivery exceptions happen."
      }
    ]
  },
  {
    id: 14,
    slug: "global-supply-chain-trends-what-to-watch-in-2025",
    title: "Global Supply Chain Trends: What to Watch in 2025",
    image: supplyChainImage,
    author: "Admin",
    category: "Supply Chain & Logistics",
    date: "May 11, 2025",
    excerpt:
      "High-level trends shaping international trade, from nearshoring to automation and sustainability requirements.",
    content:
      "Global supply chains continue to evolve as companies rethink sourcing, risk, and sustainability. New technologies and geopolitical shifts are changing strategy.",
    sections: [
      {
        heading: "Nearshoring and resilience",
        body: "Many businesses are shortening supply lines to reduce disruption risk and improve responsiveness."
      },
      {
        heading: "Automation adoption",
        body: "Warehouses and planning teams are using more automation to improve speed and accuracy."
      },
      {
        heading: "Sustainability pressure",
        body: "Customers and regulators are pushing companies to document and improve environmental performance."
      }
    ]
  }
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
