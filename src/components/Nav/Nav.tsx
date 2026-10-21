"use client";

import { usePathname } from "next/navigation";
import { 
  type MouseEvent, 
  // Suspense 
} from "react";
import Link from "next/link";
import { useAppContext } from "@/hooks/hooks";
import { navOptions } from "@/constants/navOptions";
import Logo from "@/assets/icons/Logo";
import NavSocials from "@/components/NavSocials/NavSocials";
import "./Nav.scss";
// import { scrollToTop } from "@/utils/utils";

const Nav = () => {
  const {
    setAppIsLoading,
    isLoggedIn,
    showDropdownNav,
    setShowDropdownNav,
    toggleButtonRef,
    handleIsOnSamePage,
    handleNavLinkClick
  } = useAppContext();

  const pathname = usePathname();

  const isOnHome = pathname === "/";

  const handleToggleShowDropdownNav = () => setShowDropdownNav(prev => !prev);

  const handleIsOnHome = (e: MouseEvent<HTMLElement>) => {
    handleIsOnSamePage(e);
  };

  const handleHomeClick = () => {
    setAppIsLoading(true);
    console.log("here")
  }

  const handleLinkClick = (href: string) => {
    // handleNavLinkClick(href, true);
    handleNavLinkClick(href);
  }

  return (
    <nav className="nav">
      <div className="nav__content">

        <div 
          className="nav__logo-box"
          onClick={isOnHome 
            ? handleIsOnHome
            : handleHomeClick}
        >
          <Link href="/">
            <Logo className={"nav__logo"}/>
          </Link>
        </div>
      
        <ul className="nav__links">

          {navOptions.map(({ id, name, href }) => 

            <li 
            key={id}
            >
              <button
                className="nav__link"
                onClick={() => handleLinkClick(href)}
                type="button"

              >
                {`${name}`}
              </button>
            </li>
            )
          }
          
          {isLoggedIn 

            ? (
                <li>
                  <Link 
                    className="nav__link"
                    href="/admin"
                  >
                    ADMIN
                  </Link>
                </li>
              )

            : (
                <li>
                  <NavSocials />
                </li>
              )
          }

        </ul>

        <button
          ref={toggleButtonRef}
          type="button"
          aria-label={showDropdownNav ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={showDropdownNav}
          className={`nav__toggle-button ${showDropdownNav ? "open" : ""}`}
          onClick={handleToggleShowDropdownNav}
        >
          <span className="nav__toggle-icon"></span>
          <span className="nav__toggle-icon"></span>
          <span className="nav__toggle-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;