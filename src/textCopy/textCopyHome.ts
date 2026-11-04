import { type Bullet } from "@/typing/interfaces";
import { type Detail } from "@/typing/interfaces";
import { type ExpertiseItem } from "@/typing/interfaces";
import { type MoreInfoText } from "@/typing/interfaces";
import { type SolutionItem } from "@/typing/interfaces";
import { FaLightbulb, FaGlasses, FaGraduationCap, FaChartBar, FaCloud } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import { PiWifiMediumBold } from "react-icons/pi";
import { TbSettingsFilled } from "react-icons/tb";
import detailsImg_1 from "@/assets/images/details-1.jpg";
import detailsImg_2 from "@/assets/images/details-2.jpg";
import solution_1 from "@/assets/images/solution-1.jpg";
import solution_2 from "@/assets/images/solution-2.jpg";
import solution_3 from "@/assets/images/solution-3.jpg";
import solution_4 from "@/assets/images/solution-4.jpg";

const moreInfoPoints: MoreInfoText[] = [
  {
    titleShort: "Customized Solutions:",
    titleFull: "Customized Solutions:",
    description: "Our solutions are designed to meet your specific business needs, ensuring maximum efficiency and productivity."
  },
  {
    titleShort: "Seamless Integration:",
    titleFull: "Seamless Integration:",
    description: "We seamlessly integrate our software with your existing systems, minimizing disruptions and optimizing workflows."
  }
];

const solutions: SolutionItem[] = [
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

const details: Detail[] = [
  {
    heading: "Evaluation & Deployment",
    lead: "We offer comprehensive evaluation and deployment services to ensure a smooth and successful implementation of our software solutions.",
    bullets: [
      {
        headingShort: "Evaluation:",
        headingFull: "Evaluation & Deployment:",
        blurb: "We tailor our solutions to align with your unique business needs",
      },
      {
        headingShort: "Integration:",
        headingFull: "Seamless Integration:",
        blurb: "Our team ensures smooth integration of the software into your existing infrastructure, minimizing disruptions",
      },
    ],
    img: detailsImg_1,
    imgDesc: "description of first details image"
  },
  {
    heading: "Maintenance & Support",
    lead: "We provide comprehensive maintenance and support services to ensure the smooth and uninterrupted operation of your software solutions.",
    bullets: [
      {
        headingShort: "Active Maintenance:",
        headingFull: "Proactive Maintenance:",
        blurb: "We proactively monitor and maintain your software solutions to prevent issues and optimize performance.",
      },
      {
        headingShort: "Timely Updates:",
        headingFull: "Timely Updates:",
        blurb: "We ensure your software is up to date with the latest features, security patches, and enhancements.",
      },
    ],
    img: detailsImg_2,
    imgDesc: "description of second details image"
  }
];

const expertise: ExpertiseItem[] = [
  {
    Icon: FaLightbulb,
    iconClassModifier: "bulb",
    name: "Flexible Services",
    desc: "We adapt to your needs with agile, scalable, and cost-effective solutions tailored to your business."
  },
  {
    Icon: MdMonitor,
    iconClassModifier: "monitor",
    name: "Modern Web Apps",
    desc: "We build responsive, high-performance web applications that provide a seamless user experience across all devices."
  },
  {
    Icon: PiWifiMediumBold,
    iconClassModifier: "wifi",
    name: "Connectivity",
    desc: "We ensure your systems are connected, secure, and efficient through smart integrations and APIs."
  },
  {
    Icon: TbSettingsFilled,
    iconClassModifier: "settings",
    name: "Automation",
    desc: "We streamline operations by automating repetitive processes to boost productivity and reduce costs."
  },
  {
    Icon: FaGlasses,
    iconClassModifier: "glasses",
    name: "Insight & Strategy",
    desc: "We analyze and interpret data to give you clear insights for smarter decision-making."
  },
  {
    Icon: FaGraduationCap,
    iconClassModifier: "learning",
    name: "Continuous Learning",
    desc: "Our team constantly evolves with the latest technologies to deliver innovative solutions."
  },
  {
    Icon: FaChartBar,
    iconClassModifier: "analytics",
    name: "Data Analytics",
    desc: "We turn raw data into actionable insights that drive measurable results."
  },
  {
    Icon: FaCloud,
    iconClassModifier: "cloud",
    name: "Cloud Solutions",
    desc: "We architect scalable cloud solutions that support your business growth and resilience."
  }
];

const values: Bullet[] = [
  {
    headingShort: "Corporate Value One", 
    headingFull: "Longer Corporate Value One", 
    blurb: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus qui ad totam temporibus fuga officiis?" 
  },
  {
    headingShort: "Corporate Value Two", 
    headingFull: "Longer Corporate Value Two", 
    blurb: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus qui ad totam temporibus fuga officiis?" 
  },
  {
    headingShort: "Corporate Value Three", 
    headingFull: "Longer Corporate Value Three", 
    blurb: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus qui ad totam temporibus fuga officiis?" 
  }
];

export { 
  details,
  expertise,
  moreInfoPoints,
  solutions,
  values
 };
