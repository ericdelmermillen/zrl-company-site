"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useAppContext, useOutsideClick } from "@/hooks/hooks";
import { navOptions } from "@/constants/navOptions";
import NavSocials from "../NavSocials/NavSocials";
import "./DropdownNav.scss";
import Link from "next/link";

const NAV_CLICK_DELAY = parseInt(process.env.NEXT_PUBLIC_NAV_CLICK_DELAY || "300", 10);

const DropdownNav = () => {
  const {
    isLoggedIn,
    // scrollYPos, 
    // getPrevScrollYPosValue, 
    // navLinkClick,
    // notFoundNavLinkClick,
    showDropdownNav,
    setShowDropdownNav,
    toggleButtonRef,
    handleNavLinkClick
  } = useAppContext();

  const innerRef = useRef<HTMLDivElement | null>(null);

  const handleOnOutsideClick = () => {
    setShowDropdownNav(false);
  };
  
  const outsideClickArgs = {
    targetRef: innerRef, 
    ignoredRef: toggleButtonRef,
    onOutsideClick: handleOnOutsideClick, 
    componentIsActive: showDropdownNav
  };

  useOutsideClick(outsideClickArgs);

  const handleLinkClick = (href: string) => {
    handleNavLinkClick(href, true);
  };
  
  return (
    <nav 
      className={`dropdownNav ${showDropdownNav ? "tall" : "short"}`}
      aria-label="Mobile navigation"
      aria-hidden={!showDropdownNav}
    >
      <div 
        ref={innerRef} 
        className={`dropdownNav__inner ${showDropdownNav ? "tall" : ""}`}
      >
        <h2 className="sr-only">Menu</h2>
        <ul className={`dropdownNav__links ${showDropdownNav ? "tall" : ""}`}>

          {navOptions.map(({ id, name, href }) => 

            <li 
              className="dropdownNav__item"
              key={id}
              onClick={() => handleLinkClick(href)}
            >
              <span className="dropdownNav__link">
                {`${name}`}
              </span>
            </li>
          )}

            {isLoggedIn

              ? (
                  <li 
                    className="dropdownNav__item"
                    // onClick={() => navLinkClick("admin")}
                  >
                    <Link href="/admin">
                      <span className="dropdownNav__link">
                        ADMIN
                      </span>
                    </Link>
                  </li>
                )
              : (
                <li 
                    className="dropdownNav__item"
                    // onClick={() => navLinkClick("admin")}
                  >
                    <NavSocials />
                  </li>
                )
            }

        </ul>
      </div>
    </nav>
  );
};

export default DropdownNav;