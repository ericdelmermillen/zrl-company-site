import { Dispatch, SetStateAction } from "react";

type ModalType = "privacy" | "newsletter" | "sendTest";

type ToastType = "default" | "success" | "error" | "warning" | "info";  

export { 
  type ModalType,
  type ToastType,
};