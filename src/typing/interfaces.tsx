import { 
  // type ReactNode, 
  // type ChangeEvent,
  // type SetStateAction, 
  // type Dispatch, 
  // type MouseEvent,
  // type DragEvent,
  // type ComponentType, 
  // type SVGProps,
  type RefObject
} from "react";

interface UseOutsideClickProps {
  targetRef: RefObject<HTMLElement | null>;
  onOutsideClick: (event: globalThis.MouseEvent) => void;
  componentIsActive?: boolean;
}





export {
  type UseOutsideClickProps 
};