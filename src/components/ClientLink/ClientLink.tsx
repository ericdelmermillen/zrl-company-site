"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type MouseEvent, useRef, useEffect } from "react";
import { type ClientLinkProps } from "@/typing/interfaces";
import { useAppContext } from "@/hooks/hooks";
import { isModifiedClick, scrollToTop } from "@/utils/utils";

const NAV_CLICK_DELAY = parseInt(process.env.NEXT_PUBLIC_NAV_CLICK_DELAY || "250", 10);

const ClientLink = ({
  href,
  className = "",
  onClick, 
  children,
  scroll = false,
}: ClientLinkProps ) => {

  const timeoutRef = useRef<number | null>(null);

  const currentPathname = usePathname();

  const { setAppIsLoading, showDropdownNav, setShowDropdownNav } = useAppContext();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isModifiedClick(e)) {
      setAppIsLoading(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      timeoutRef.current = window.setTimeout(() => {
        if (currentPathname === href) {
          setAppIsLoading(false);
          scrollToTop();
        }
        setShowDropdownNav(false);
      }, showDropdownNav ? (NAV_CLICK_DELAY * 2) : 0);
    }

    if (onClick) {
      onClick(e);
    }
  };

  // useEffect to clear timeout on teardown
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, []);

  return (
    <Link
      href={href}
      className={className}
      onClick={handleLinkClick}
      scroll={scroll}
    >
      {children}
    </Link>
  );
};

export default ClientLink;