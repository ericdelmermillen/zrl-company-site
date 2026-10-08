"use client";

import { useContext, useEffect, useRef } from "react";
import { AppContextValue, UseOutsideClickProps } from "@/typing/interfaces"
import { AppContext } from "@/contexts/AppContext";

const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

const useOutsideClick = ({
  targetRef,
  ignoredRef,
  onOutsideClick,
  componentIsActive = true,
}: UseOutsideClickProps) => {
  const handlerRef = useRef(onOutsideClick);
  handlerRef.current = onOutsideClick;

  useEffect(() => {
    if (!componentIsActive) {
      return;
    }

    const handleDocumentClick = (e: globalThis.MouseEvent) => {
      const container = targetRef.current;
      const target = e.target as HTMLElement | null;

      if (!container || !target) {
        return;
      }

      const isInside = e.composedPath().includes(container);
      const isIgnored = ignoredRef?.current?.contains(target);

      if (!isInside && !isIgnored) {
        handlerRef.current(e);
      }
    };

    window.addEventListener("click", handleDocumentClick, { capture: true });

    return () => {
      window.removeEventListener("click", handleDocumentClick, {
        capture: true,
      });
    };
  }, [componentIsActive, targetRef]);
};

export { 
  useAppContext,
  useOutsideClick,
};