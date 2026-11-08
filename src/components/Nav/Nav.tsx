"use client";

import { useAppContext } from "@/hooks/hooks";
import { navOptions } from "@/constants/navOptions";
import ClientLink from "@/components/ClientLink/ClientLink";
import Logo from "@/assets/icons/Logo";
import NavItem from "@/components/NavItem/NavItem";
import NavSocials from "@/components/NavSocials/NavSocials";
import "./Nav.scss";
import LogoutButton from "../LogoutButton/LogoutButton";

const Nav = () => {
  const {
    isLoggedIn,
    showDropdownNav,
    setShowDropdownNav,
    handleNavLinkClick
  } = useAppContext();

  const handleToggleShowDropdownNav = () => setShowDropdownNav(prev => !prev);

  const handleLinkClick = (href: string) => handleNavLinkClick(href);

  return (
    <nav className="nav">
      <div className="nav__content">

        <div className="nav__logo-box">
          <ClientLink href="/">
            <Logo className={"nav__logo"}/>
          </ClientLink>
        </div>
      
        <ul className="nav__links">

          {navOptions.map(({ id, name, href }) => (

            <NavItem
              key={id}
              itemClassName="nav__item"
              buttonClassName="nav__link"
              href={href}
              onClick={handleLinkClick}
            >
              {name}
            </NavItem>

          ))}
          
          {isLoggedIn 

            ? (
                <>
                  <ClientLink 
                    className="nav__link"
                    href="/admin"
                  >
                    ADMIN
                  </ClientLink>
                  <LogoutButton />
                </>
              )

            : (
                <li className="nav__item">
                  <NavSocials />
                </li>
              )
          }

        </ul>

        <button
          className={`nav__toggle-button ${showDropdownNav ? "open" : ""}`.trim()}
          type="button"
          aria-label={showDropdownNav ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={showDropdownNav}
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