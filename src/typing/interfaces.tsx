import { StaticImageData } from "next/image";
import { 
  ReactNode,
  // type ReactNode, 
  // type ChangeEvent,
  type SetStateAction, 
  type Dispatch, 
  type MouseEvent,
  // type DragEvent,
  // type ComponentType, 
  // type SVGProps,
  type RefObject
} from "react";
import { type IconType } from "react-icons";
import { ModalType } from "./types";

interface AppContextValue {
  appIsLoading: boolean;
  setAppIsLoading: Dispatch<SetStateAction<boolean>>;
  scrollYPos: number;
  setScrollYPos: Dispatch<SetStateAction<number>>;
  getPrevScrollYPosValue: () => number;
  toggleButtonRef: RefObject<HTMLButtonElement | null>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  showDropdownNav: boolean;
  setShowDropdownNav: Dispatch<SetStateAction<boolean>>;
  handleIsOnSamePage: (e?: MouseEvent<HTMLElement>) => void;
  handleNavLinkClick: any;
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
  href: string;
}

interface NavItemProps {
  itemClassName: string;
  buttonClassName: string;
  onClick: (href: string) => void;
  href: string;
  children?: ReactNode;
}

interface ClientLinkProps {
  href: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  children?: ReactNode;
  scroll?: boolean;
}

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


interface SolutionProps {
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
  type NavItemProps,
  type ClientLinkProps,
  type Social,
  type IconProps,
  type MoreInfoTextData,
  type Bullet,
  type SolutionProps,
  type CheckboxItem,
  type LabelledCheckboxProps,
  type DetailData,
  type DetailProps,
  type ExpertiseItem,
};