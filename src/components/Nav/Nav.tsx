"use client";

import Link from "next/link";
import { useAppContext } from "@/hooks/hooks";
import { navOptions } from "@/constants/navOptions";
import Logo from "@/assets/icons/Logo";
import NavSocials from "@/components/NavSocials/NavSocials";
import "./Nav.scss";

const Nav = () => {
  const {
    isLoggedIn,
    showDropdownNav,
    setShowDropdownNav,
    toggleButtonRef
  } = useAppContext();

  const handleToggleShowDropdownNav = () => {
    setShowDropdownNav(prev => !prev);
  };

  return (
    <nav className="nav">
      <div className="nav__content">

        <div 
          className="nav__logo-box"
          // onClick={isOnHome ? handleScrollToTop: handleHomeClick}
        >
          <Link href="/">
          <Logo className={"nav__logo"}/>
          </Link>
        </div>
      
        <ul className="nav__links">

          {navOptions.map(({ id, name }) => 

            <li key={id}>
              <div 
                className={`nav__link`} 
                // onClick={isOnHome 
                //   ? () => navLinkClick(name)
                //   : () => notFoundNavLinkClick(name)}
              >
                {`${name}`}
              </div>
            </li>
            )
          }
          
          {isLoggedIn 

            ? (
                <li>
                  <Link href="/admin">
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