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


export {
  type AppContextValue,
  type ChildrenProps,
  type UseOutsideClickProps,
  type NavOption,
  type NavProps,
  type Social,
  type IconProps,
};