"use client";

import { type ShowHidePasswordProps } from "@/typing/interfaces";
import Hide from "@/assets/icons/Hide";
import Show from "@/assets/icons/Show";
import "./ShowHidePassword.scss";

const ShowHidePassword = ({ handleTogglePasswordVisibility, showPassword }: ShowHidePasswordProps) => {
  
  return (
    <div className="showHidePassword">
      <button
        className={`showHidePassword__icon`}
        onClick={handleTogglePasswordVisibility}
        aria-label={showPassword ? "Hide password" : "Show password"}
        type="button"
      >
        {showPassword 
          ? <Hide className="passwordInput__icon--hide" />
          : <Show className="passwordInput__icon--show" />
        }
      </button>
    </div>
  );
};

export default ShowHidePassword;