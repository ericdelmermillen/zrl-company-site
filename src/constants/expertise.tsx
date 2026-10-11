import { ExpertiseItem } from "@/typing/interfaces";
import { FaLightbulb, FaGlasses, FaGraduationCap, FaChartBar, FaCloud } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import { PiWifiMediumBold } from "react-icons/pi";
import { TbSettingsFilled } from "react-icons/tb";

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

export { expertise };