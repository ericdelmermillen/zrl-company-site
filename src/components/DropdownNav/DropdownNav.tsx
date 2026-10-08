"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useAppContext, useOutsideClick } from "@/hooks/hooks";
import { navOptions } from "@/constants/navOptions";
import NavSocials from "../NavSocials/NavSocials";
import "./DropdownNav.scss";

const DropdownNav = () => {
  const {
    isLoggedIn,
    scrollYPos, 
    getPrevScrollYPosValue, 
    // navLinkClick,
    // notFoundNavLinkClick,
    showDropdownNav,
    setShowDropdownNav,
    toggleButtonRef
  } = useAppContext();

  const innerRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();
  // const isOnHome = pathname === "/";

  // const prevScrollYPosValue = getPrevScrollYPosValue();

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
          {/* <li className="dropdownNav__link dropdownNav__item--hidden" >
            Dropdown Nav Menu
          </li> */}

          {navOptions.map(({ id, name }) => 

            <li 
              className="dropdownNav__item"
              key={id}
              // onClick={isOnHome 
              //   ? () => navLinkClick(name)
              //   : () => notFoundNavLinkClick(name)}
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
                    <span className="dropdownNav__link">
                      ADMIN
                    </span>
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