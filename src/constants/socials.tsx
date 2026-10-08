import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { Social } from "@/typing/interfaces";

const socials: Social[] = [
  {
    name: "facebook",
    href: "https://www.facebook.com/ZidgyRoadLabs",
    Icon: FaFacebookF
  },
  {
    name: "twitter-x",
    href: "https://x.com/zidgyroadlabs",
    Icon: RiTwitterXLine
  }
];

export { socials };