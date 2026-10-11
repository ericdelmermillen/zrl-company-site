import { DetailData } from "@/typing/interfaces";
import detailsImg_1 from "@/assets/images/details-1.jpg";
import detailsImg_2 from "@/assets/images/details-2.jpg";

  const details: DetailData[] = [
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

  export { details };