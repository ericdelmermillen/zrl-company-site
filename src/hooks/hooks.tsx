"use client";

import { useEffect, useRef } from "react";
import { UseOutsideClickProps } from "@/typing/interfaces"

const useOutsideClick = ({ targetRef, onOutsideClick, componentIsActive = true }: UseOutsideClickProps) => {
  const handlerRef = useRef(onOutsideClick);
  handlerRef.current = onOutsideClick;

  useEffect(() => {
    if (!componentIsActive) {
      return;
    }

    const handleDocumentClick = (e: globalThis.MouseEvent) => {
      const container = targetRef.current;
      if (!container) {
        return;
      }

      const isInside = e.composedPath().includes(container);
      if (!isInside) {
        handlerRef.current(e);
      }
    };

    window.addEventListener("click", handleDocumentClick, { capture: true });

    return () => {
      window.removeEventListener("click", handleDocumentClick, { capture: true });
    };
  }, [componentIsActive, targetRef]);
};

export { 
  useOutsideClick
};