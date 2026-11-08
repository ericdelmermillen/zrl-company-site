import { useAppContext } from "../../hooks/hooks";
import { BiLogOutCircle } from "react-icons/bi";
import "./LogoutButton.scss";

const LogoutButton = () => {
  const { handleLogoutUser } = useAppContext();

  return (
    <button
      className="logoutButton"
      onClick={handleLogoutUser}
      type="button"
      aria-label="Logout"
    >
      <span className="logoutButton__content">
        <span className="logoutButton__text">LOGOUT</span>
        <span className="logoutButton__icon"><BiLogOutCircle /></span>
      </span>
    </button>
  )};

export default LogoutButton;