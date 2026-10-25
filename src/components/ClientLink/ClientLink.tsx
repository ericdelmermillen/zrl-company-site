"use client";

import Link from "next/link";
import { type  MouseEvent } from "react";
import { type ClientLinkProps } from "@/typing/interfaces";
import { useAppContext } from "@/hooks/hooks";
import { isModifiedClick } from "@/utils/utils";

const ClientLink = ({
  href,
  className = "",
  onClick, 
  children,
  scroll = false,
}: ClientLinkProps ) => {

  const { setAppIsLoading } = useAppContext();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isModifiedClick(e)) {
      setAppIsLoading(true);
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