"use client";

import { type SyntheticEvent, type ChangeEvent, useState } from "react";
import { loginUser } from "@/actions/authActions";
import { isValidEmail, isValidPassword, staggerToastsByN } from "@/utils/utils";
import ShowHidePassword from "@/components/ShowHidePassword/ShowHidePassword";
import "./LoginForm.scss";
import { toast } from "react-toastify";

const isSafari: boolean =
  navigator.userAgent.toLowerCase().includes("safari") &&
  !navigator.userAgent.toLowerCase().includes("chrome");

const LoginForm  = () => {
  const [ componentIsLoading, setComponentIsLoading ] = useState<boolean>(false);
  const [ email, setEmail ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
  const [ showPassword, setShowPassword ] = useState<boolean>(false);
  const [ initialFormCheck, setInitialFormCheck ] = useState<boolean>(false);
  const [ emailIsValid, setEmailIsValid ] = useState<boolean>(true);
  const [ passwordIsValid, setPasswordIsValid ] = useState<boolean>(true);

  const handleTogglePasswordVisibility = (): void => setShowPassword(prev => !prev);

  const handleEmailChange = (e?: ChangeEvent<HTMLInputElement>): boolean => {
    const emailValue: string = e ? e?.target.value : email;

    const isValid: boolean = isValidEmail(emailValue);

    setEmail(emailValue);
    setEmailIsValid(isValid);

    return isValid;
  };

  const handlePasswordChange = (e?: ChangeEvent<HTMLInputElement>): boolean => {
    const passwordValue: string = e ? e?.target.value : password;

    const isValid: boolean = isValidPassword(passwordValue);

    setPassword(passwordValue);
    setPasswordIsValid(isValid);

    return isValid;
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setInitialFormCheck(true);

    let errors: number = 0;

    if(!handleEmailChange()) {
      staggerToastsByN("Invalid email", "error", errors)
      errors += 1;
    };

    if(!handlePasswordChange()) {
      staggerToastsByN("Invalid password", "error", errors)
      errors += 1;
    };

    if(errors){
      return;
    };

    // try/catch here
    // on success serve toast, set isLogged in and redirect to /
    loginUser({email, password});
    toast.success("Logged in. Redirecting...");

  };

  return (
    <section className="loginForm">
      <div className="loginForm__inner">
        <div className="loginForm__header">
          <h1 className="loginForm__heading">
            Admin Login
          </h1>
        </div>

        <form
          name="loginForm"
          className="loginForm__form"
          onSubmit={handleSubmit}
        >
          <div className="loginForm__field">
            <label htmlFor="email" className="loginForm__label">
              Email Address
            </label>

            <input
              id="email"
              type="text"
              className="loginForm__input"
              name="email"
              placeholder="EMAIL"
              value={email}
              onChange={handleEmailChange}
              aria-invalid={!emailIsValid && initialFormCheck ? "true" : "false"}
              aria-describedby="emailError"
            />

            {!emailIsValid && initialFormCheck && (
              <div
                id="emailError"
                className="loginForm__error"
                role="alert"
              >
                Invalid Email
              </div>
            )}
            
          </div>

          <div className="loginForm__field loginForm__field--password">
            <label htmlFor="password" className="loginForm__label">
              Password
            </label>

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="loginForm__input loginForm__input--password"
              name="password"
              placeholder="PASSWORD"
              value={password}
              onChange={handlePasswordChange}
              aria-invalid={!passwordIsValid && initialFormCheck ? "true" : "false"}
              aria-describedby="passwordError"
            />

            {!isSafari
            
              ? (
                  <ShowHidePassword 
                    handleTogglePasswordVisibility={handleTogglePasswordVisibility}
                    showPassword={showPassword}
                  />
                )
              : null
            }

            {!passwordIsValid && initialFormCheck 
            
              ?
                <div
                  id="passwordError"
                  className="loginForm__error"
                  role="alert"
                >
                  Invalid Password
                </div>
              : null

            }
          </div>

          <div className="loginForm__submit">
            <button
              type="submit"
              className={`loginForm__button ${componentIsLoading ? "disabled" : ""}`.trim()}
              aria-busy={componentIsLoading}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;