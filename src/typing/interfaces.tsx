import { StaticImageData } from "next/image";
import { 
  ReactNode,
  // type ReactNode, 
  // type ChangeEvent,
  type SetStateAction, 
  type Dispatch, 
  // type MouseEvent,
  // type DragEvent,
  // type ComponentType, 
  // type SVGProps,
  type RefObject
} from "react";
import { type IconType } from "react-icons";
import { ModalType } from "./types";

interface AppContextValue {
  scrollYPos: number;
  setScrollYPos: Dispatch<SetStateAction<number>>;
  getPrevScrollYPosValue: () => number;
  toggleButtonRef: RefObject<HTMLButtonElement | null>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  showDropdownNav: boolean;
  setShowDropdownNav: Dispatch<SetStateAction<boolean>>;
}

interface ChildrenProps {
  children?: ReactNode;
}

interface UseOutsideClickProps {
  targetRef: RefObject<HTMLElement | null>;
  ignoredRef?: RefObject<HTMLElement | null>;
  onOutsideClick: (event: globalThis.MouseEvent) => void;
  componentIsActive?: boolean;
}

interface NavOption {
  id: number;
  name: string;
}

interface NavProps {
  children?: ReactNode;
  navOptions: NavOption[];
};


interface Social {
  name: string;
  href: string;
  Icon: IconType;
}

interface IconProps {
  className?: string;
  strokeClassName?: string;
}

interface MoreInfoTextData {
  titleShort: string;
  titleFull: string;
  description: string;
}

interface Bullet {
  headingShort: string;
  headingFull: string;
  blurb: string;
};


interface Solutions {
  img: StaticImageData | string;
  shortTitle: string;
  fullTitle: string;
  text: string;
  tag: string;
  alt: string;
};

interface CheckboxItem {
  key: "agreeToNewsletter" | "agreeToTerms";
  labelId: string;
  labelText: string;
  modalType: ModalType;
  spanStub: string;
  spanLinkText: string;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  isValid: boolean;
};

type LabelledCheckboxProps = {
  labelId: string;
  labelText: string;
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
  isValid: boolean;
  modalType: ModalType;
  spanStub:  string;
  spanLinkText: string;
  onSpanLinkClick: (modalType: ModalType) => void;
};

interface DetailData {
  heading: string;
  lead: string;
  bullets: Bullet[];
  img: StaticImageData;
  imgDesc: string;
}

interface DetailProps extends DetailData {
  idx: number;
}

interface ExpertiseItem {
  Icon: IconType;
  iconClassModifier: string;
  name: string;
  desc: string;
}

export {
  type AppContextValue,
  type ChildrenProps,
  type UseOutsideClickProps,
  type NavOption,
  type NavProps,
  type Social,
  type IconProps,
  type MoreInfoTextData,
  type Bullet,
  type Solutions,
  type CheckboxItem,
  type LabelledCheckboxProps,
  type DetailData,
  type DetailProps,
  type ExpertiseItem,
};