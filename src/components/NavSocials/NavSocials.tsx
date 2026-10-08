import { socials } from "@/constants/socials";
import "./NavSocials.scss";

const NavSocials = () => {
  return (
    <ul className="navSocials" aria-label="Social links">

      {socials.map(({ name, href, Icon }) => (

        <li key={name} className={`navSocials__social navSocials__social--${name}`}>
          <a
            href={href}
            className="navSocials__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} (opens in a new tab)`}
          >
            <Icon 
              className={`navSocials__icon navSocials__icon--${name}`} 
              aria-hidden="true" 
              focusable="false"
            />
          </a>
        </li>

      ))}
      
    </ul>
  );
};

export default NavSocials;