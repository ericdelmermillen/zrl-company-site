"use client";

import { useRef } from "react";
import { useAppContext } from "@/hooks/hooks";
import { navOptions } from "@/constants/navOptions";
import ClientLink from "../ClientLink/ClientLink";
import NavItem from "@/components/NavItem/NavItem";
import NavSocials from "@/components/NavSocials/NavSocials";
import "./DropdownNav.scss";

const DropdownNav = () => {
  const {
    isLoggedIn,
    showDropdownNav,
    setShowDropdownNav,
    handleNavLinkClick
  } = useAppContext();

  const innerRef = useRef<HTMLDivElement | null>(null);

  const handleTouchOff = () => setShowDropdownNav(false);

  const handleLinkClick = (href: string) => handleNavLinkClick(href, true);
  
  return (
    <>
      <nav 
        className={`dropdownNav ${showDropdownNav ? "tall" : "short"}`}
        aria-label="Mobile navigation"
        aria-hidden={!showDropdownNav}
      >
        <div ref={innerRef} className={`dropdownNav__inner ${showDropdownNav ? "tall" : ""}`}>
          <h2 className="sr-only">
            Menu
          </h2>
          <ul className={`dropdownNav__links ${showDropdownNav ? "tall" : ""}`}>

            {navOptions.map(({ id, name, href }) => 

              <NavItem
                key={id}
                itemClassName="dropdownNav__item"
                buttonClassName="dropdownNav__link"
                href={href}
                onClick={handleLinkClick}
              >
                {name}
              </NavItem>
              
            )}

              {isLoggedIn

                ? (
                    <ClientLink
                      className="dropdownNav__item"
                      href="/admin"
                    >
                      <span className="dropdownNav__link">
                        ADMIN
                      </span>
                    </ClientLink>
                  )
                : (
                  <li className="dropdownNav__item">
                    <NavSocials />
                  </li>
                  )
              }

          </ul>
        </div>
      </nav>
        
      <div 
        className={`dropdownNav__touchOff ${showDropdownNav ? "show" : ""}`} 
        onClick={handleTouchOff}
      />
    </>
  );
};

export default DropdownNav;