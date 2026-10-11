
import { Solutions } from "@/typing/interfaces";
import solution_1 from "@/assets/images/solution-1.jpg";
import solution_2 from "@/assets/images/solution-2.jpg";
import solution_3 from "@/assets/images/solution-3.jpg";
import solution_4 from "@/assets/images/solution-4.jpg";

const solutions: Solutions[] = [
    { 
    img: solution_1,
    shortTitle: "Brand & Product Design",
    fullTitle: "Brand Identity & Product Design",
    text: "We design visual identities and interface systems that keep your product consistent across software, web, and marketing touchpoints. Branding and UI work together to create clarity and trust.",
    tag: "DESIGN",
    alt: "Workspace showing a brand design system displayed on a desktop monitor, with color palettes, logo variations, and supporting materials arranged on a desk."
  },
    { 
    img: solution_2,
    shortTitle: "Customer-Facing Apps",
    fullTitle: "Customer-Facing Web Applications",
    text: "We build modern web applications that help you engage customers and deliver clear, polished digital experiences. Interfaces are designed with usability, performance, and consistency in mind from the start.",
    tag: "EXPERIENCE",
    alt: "Person using a laptop and smartphone showing customer-facing web and mobile applications, with product browsing and ordering interfaces displayed on both screens."
  },
  { 
    img: solution_3,
    shortTitle: "Custom Internal Tools",
    fullTitle: "Custom Internal Tools",
    text: "We design and build internal tools that simplify workflows, reduce manual effort, and improve visibility across your business. From dashboards to admin interfaces, everything is shaped around how your team actually works.",
    tag: "MANAGEMENT",
    alt: "Internal business dashboard displayed on a desktop monitor, showing charts, task lists, and performance metrics in a modern workspace."
  },
  { 
    img: solution_4,
    shortTitle: "Workflow Automation",
    fullTitle: "Sales & Workflow Automation",
    text: "We create focused tools that support sales workflows, automate repetitive tasks, and improve collaboration. The goal is to remove friction and give teams software they actually enjoy using.",
    tag: "OPERATIONS",
    alt: "Desktop monitor displaying a sales and workflow automation dashboard with process flows, charts, and activity summaries in a modern workspace."
  }
];

export { solutions };