import { NavItemProps } from "@/typing/interfaces";

const NavItem = ({ 
  itemClassName, 
  buttonClassName, 
  onClick,
  href,
  children
}: NavItemProps) => {

  const handleClick = () => onClick(href);

  return (
    <li className={itemClassName}>
      <button
        className={buttonClassName}
        onClick={handleClick}
        type="button"
      >
        {children}
      </button>
    </li>
  );
};

export default NavItem;