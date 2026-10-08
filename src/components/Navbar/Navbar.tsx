"use client";

import { useAppContext } from "@/hooks/hooks";
import DropdownNav from "@/components/DropdownNav/DropdownNav";
import Nav from "@/components/Nav/Nav";
import "./Navbar.scss";

const Navbar = () => {
  const { scrollYPos, getPrevScrollYPosValue } = useAppContext();
  const navIsHidden = getPrevScrollYPosValue() < scrollYPos && scrollYPos > 50;

  return (
    <header className={`navbar ${navIsHidden ? "hide" : ""}`}>
      <Nav/>
      <DropdownNav />
    </header>
  );
};

export default Navbar;