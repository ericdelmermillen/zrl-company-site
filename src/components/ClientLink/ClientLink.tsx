"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type  MouseEvent } from "react";
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

  const currentPathname = usePathname();
  const isOnHome = currentPathname === "/";

  const { setAppIsLoading, setShowDropdownNav } = useAppContext();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isModifiedClick(e)) {

      if (isOnHome && currentPathname === href) {
        scrollToTop();
        setShowDropdownNav(false);
        
        if (onClick) {
          onClick(e);
        }
        return;
      }

      setAppIsLoading(true);
      
      setTimeout(() => {
        if (currentPathname === href) {
          setAppIsLoading(false);
          scrollToTop();
        }
        setShowDropdownNav(false);
      }, NAV_CLICK_DELAY * 2);
    }

    if (onClick) {
      onClick(e);
    }
  };

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