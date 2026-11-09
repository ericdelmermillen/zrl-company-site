"use client";

import { type ChangeEvent, type SyntheticEvent, useState } from "react";
import { type OpenModalOptions } from "@/typing/interfaces";
import { 
  // useAppContext, 
  useModalContext } from "@/hooks/hooks";
import { isValidEmail, staggerToastsByN } from "@/utils/utils";
import { PRIVACY_POLICY_TEXT, PRIVACY_POLICY_TITLE } from "@/textCopy/textCopyLegal";
import { toast } from "react-toastify";
import LabelledCheckbox from "@/components/LabelledCheckbox/LabelledCheckbox";
import "./Subscribe.scss";

const Subscribe = () => {
  // const { 
  //   setAppIsLoading
  // } = useAppContext();
  const { handleOpenModal } = useModalContext();

  const [ initialFormCheck , setInitialFormCheck ] = useState<boolean>(false);
  const [ email, setEmail ] = useState<string>("");
  const [ emailIsValid, setEmailIsValid ] = useState<boolean>(true);
  const [ agreeToPrivacy, setAgreeToPrivacy ] = useState<boolean>(true);
  const [ componentIsLoading, setComponentIsLoading ] = useState<boolean>(false);

  const handleEmailChange = (e?: ChangeEvent<HTMLInputElement>): boolean => {
    const emailValue: string = e ? e.target.value : email;
    const emailIsValid = isValidEmail(emailValue);

    setEmail(emailValue);
    setEmailIsValid(emailIsValid);

    return emailIsValid;
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (componentIsLoading) {
      return;
    }

    setInitialFormCheck(true);

    let errors = 0;

    if (!handleEmailChange()) {
      staggerToastsByN("Email is invalid", "error", errors);
      errors++;
    }

    if (!agreeToPrivacy) {
      staggerToastsByN("Please agree to the Privacy Policy", "error", errors);
      errors++;
    }

    if(errors) {
      return;
    }

    // handleSetShowIsLoadingTrue(setComponentIsLoading, "subscribeIsLoading");

    setTimeout(() => {
      setComponentIsLoading(false);
      // handleSetShowIsLoadingFalse(setComponentIsLoading, "subscribeIsLoading");
      toast.success("Successfully subscribed to our Newsletter.");
      setEmail("");
      setEmailIsValid(true);
      setInitialFormCheck(false);
      setAgreeToPrivacy(true);
    }, 1500);

    // add subscribe action
  };
  
  const handleOpenPrivacyModal = () => {
    const modalOptions: OpenModalOptions = {
      modalType: "privacy", 
      modalTitle:  PRIVACY_POLICY_TITLE,
      modalText: PRIVACY_POLICY_TEXT,
    };

    handleOpenModal(modalOptions);
  };

  return (
    <div className="subscribe">
      <div className="subscribe__inner">

        <h2 className="subscribe__heading">
          Subscribe & Follow
        </h2>
        <p className="subscribe__lead">
          Stay updated with our latest news and announcements. Subscribe to our newsletter and follow us on social media for valuable insights and exciting updates.
        </p>

        <form className="subscribe__form" onSubmit={handleSubmit}>
          <div className="subscribe__form-field">

            <label htmlFor="subscribe" className="subscribe__label">
              Subscribe
            </label>

            <div className="subscribe__input-wrapper">
              <input
                id="subscribe"
                className={`subscribe__input ${initialFormCheck && !emailIsValid ? "invalid" : ""}`.trim()}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
              
            </div>
            <div className="subscribe__button-container">

              <button 
                className={`subscribe__submit ${!agreeToPrivacy || componentIsLoading ? "disabled" : ""}`.trim()}
                type="submit"
              >
                SUBMIT
              </button>

            </div>
          </div>

          <div className="subscribe__terms">
            <div className="subscribe__terms-checkbox">

              <LabelledCheckbox 
                labelId={"subscribeFormTerms"}
                labelText={"privacy policy"}
                isChecked={agreeToPrivacy}
                setIsChecked={setAgreeToPrivacy}
                isValid={initialFormCheck ? agreeToPrivacy : true}
                modalType={"privacy"}
                spanStub={"Agree to the "}
                spanLinkText={"Privacy Policy"}
                onSpanLinkClick={handleOpenPrivacyModal}
              />
            
            </div>
          </div>
          
        </form>

      </div>
    </div>
  );
};

export default Subscribe;