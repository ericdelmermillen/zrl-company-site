"use client";

import { type CheckboxItem, type OpenModalOptions } from "@/typing/interfaces";
import { type ModalType } from "@/typing/types";
import { type ChangeEvent, type SyntheticEvent, useState, useRef } from "react";
import { useAppContext, useModalContext } from "@/hooks/hooks";
import { isValidEmail, staggerToastsByN, validatePhoneNumber } from "@/utils/utils";
// import { toast } from "react-toastify";
import { 
  PRIVACY_POLICY_TITLE, 
  PRIVACY_POLICY_TEXT, 
  NEWSLETTER_POLICY_TITLE, 
  NEWSLETTER_POLICY_TEXT 
} from "@/textCopy/textCopyLegal";
import LabelledCheckbox from "@/components/LabelledCheckbox/LabelledCheckbox";
import { sendMoreInfoEmail } from "@/actions/moreInfoActions";
import { toast } from "react-toastify";
import "./MoreInfoForm.scss";

// *** need validation state checking when user selects from auto fill
// *** if user also subscribes here but email is already in database should I just ignore it here but notify that email is already in database in subscribe?
// need to revise handling of componentIsLoading
// need clearForm function
// need state for formRequested: serve toast to tell user to check their email

const MoreInfoForm= () => {
  const { 
    // appIsLoading, 
    setAppIsLoading } = useAppContext();
  const { handleOpenModal } = useModalContext();

  const [ name, setName ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ phone, setPhone ] = useState<string>("");
  const [ agreeToNewsletter, setAgreeToNewsletter ] = useState<boolean>(true);
  const [ agreeToTerms, setAgreeToTerms ] = useState<boolean>(true);

  const [ initialFormCheck , setInitialFormCheck ] = useState<boolean>(false);

  const [ nameIsValid, setNameIsValid ] = useState<boolean>(true);
  const [ emailIsValid, setEmailIsValid ] = useState<boolean>(true);
  const [ phoneIsValid, setPhoneIsValid ] = useState<boolean>(true);

  const [ componentIsLoading, setComponentIsLoading ] = useState<boolean>(false);

  const phoneRef = useRef<HTMLInputElement | null>(null);

  const checkboxItems: CheckboxItem[] = [
    {
      key: "agreeToNewsletter",
      labelId: "moreInfoFormNewsletter",
      labelText: "Newsletter",
      modalType: "newsletter",
      spanStub: "Subscribe to our ",
      spanLinkText: "Newsletter",
      isChecked: agreeToNewsletter,
      setIsChecked: setAgreeToNewsletter,
      isValid: true,
    },
    {
      key: "agreeToTerms",
      labelId: "moreInfoFormTerms",
      labelText: "Terms",
      modalType: "privacy",
      spanStub: "Agree to our ",
      spanLinkText: "Privacy Policy",
      isChecked: agreeToTerms,
      setIsChecked: setAgreeToTerms,
      isValid: initialFormCheck ? agreeToTerms : true
    },
  ];

  const handleNameChange = (e?: ChangeEvent<HTMLInputElement>): boolean => {
    const nameValue: string = e ? e.target.value : name;
    const isValidLength = nameValue.trim().length >= 2;
    setName(nameValue);
    setNameIsValid(isValidLength);
    return isValidLength;
  };

  const handleEmailChange = (e?: ChangeEvent<HTMLInputElement>): boolean => {
    const emailValue: string = e ? e?.target.value : email;
    const emailIsValid = isValidEmail(emailValue);

    setEmail(emailValue);
    setEmailIsValid(emailIsValid);

    return emailIsValid;
  };

  const handlePhoneChange = (e?: ChangeEvent<HTMLInputElement>): boolean => {
    const phoneValue: string = e ? e?.target.value : phone;
    const phoneNumberIsValid = validatePhoneNumber(phoneValue);

    setPhone(phoneValue);
    setPhoneIsValid(phoneNumberIsValid);

    return phoneNumberIsValid;
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setInitialFormCheck(true);
    
    let errors = 0;

    if(!handleEmailChange()) {
      staggerToastsByN("Email is invalid", "error", errors);
      errors++;
    };
    
    if(!handleNameChange()) {
      staggerToastsByN("Name is invalid", "error", errors);
      errors++;
    };
    
    if(phone.length && !handlePhoneChange()) {
      staggerToastsByN("Phone is invalid", "error", errors);
      errors++;
    };
    
    if(!agreeToTerms) {
      staggerToastsByN("Please agree to the Privacy Policy", "error", errors);
      errors++;
    };

    if(errors) {
      return;
    };

    try {
      setAppIsLoading(true);

      const response = await sendMoreInfoEmail({ name, email, phone,});

      if (response.success) {
        toast.success(response.message || "Inquiry sent successfully. Check your inbox for confirmation.")
        setAppIsLoading(false);
        // clear form 
        // scroll to top
        // success toast
      }

      console.log(response)

    } catch (error) {

    }
  };

  const handleSetModalData = (modalType: ModalType) => {
    const isNewsletter = modalType === "newsletter";
    
    const modalOptions: OpenModalOptions = {
      modalType: modalType, 
      modalTitle: isNewsletter ? NEWSLETTER_POLICY_TITLE : PRIVACY_POLICY_TITLE,
      modalText: isNewsletter ? NEWSLETTER_POLICY_TEXT : PRIVACY_POLICY_TEXT,
    };

    handleOpenModal(modalOptions);
  };

  return (
    <article className="moreInfoForm__section">
        
      <form 
        className="moreInfoForm__form" 
        name="moreInfoForm"
        onSubmit={handleSubmit}
      >
        <div className="moreInfoForm__fields">
          <div className="moreInfoForm__field moreInfoForm__field--name">
            <label htmlFor="moreInfoFormName" className="moreInfoForm__label">
              Name
            </label>

            <input 
              id="moreInfoFormName"
              type="text" 
              className={
                `moreInfoForm__input moreInfoForm__input--name ${
                    initialFormCheck && !nameIsValid ? "invalid" : ""}`.trim()}
              name="name"
              value={name}
              autoComplete="name"
              placeholder="Enter Name"
              onChange={handleNameChange}
            />

          </div>

          <div className="moreInfoForm__field moreInfoForm__field--email">

            <label htmlFor="moreInfoFormEmail" className="moreInfoForm__label">
              Email
            </label>

            <input
              id="moreInfoFormEmail"
              type="email" 
              className={`moreInfoForm__input moreInfoForm__input--email ${
                initialFormCheck && !emailIsValid ? "invalid" : ""}`.trim()}
              name="email"
              value={email}
              autoComplete="email"
              placeholder="Enter Email"
              onChange={handleEmailChange}
            />
          </div>

          <div className="moreInfoForm__field moreInfoForm__field--phone">

            <label htmlFor="moreInfoFormPhone" className="moreInfoForm__label">
              Phone
            </label>

            <input 
              id="moreInfoFormPhone"
              type="tel" 
              className={
                `moreInfoForm__input moreInfoForm__input--phone
                  ${initialFormCheck && !phoneIsValid && phone ? "invalid" : ""}`.trim()} 
              inputMode="numeric"
              autoComplete="tel"
              placeholder="Enter Phone (Optional)"
              value={phone}
              ref={phoneRef}
              onChange={handlePhoneChange}
            />
          
          </div>
        </div>
        <div className="moreInfoForm__checkboxes">

          <div className="moreInfoForm__checkboxes-inner">

            {checkboxItems.map(({ 
              key, 
              labelId, 
              labelText, 
              isChecked, 
              setIsChecked, 
              isValid, 
              modalType, 
              spanStub,
              spanLinkText
            }) => (

              <LabelledCheckbox
                key={key}
                labelId={labelId}
                labelText={labelText}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                isValid={isValid}
                modalType={modalType}
                spanStub={spanStub}
                spanLinkText={spanLinkText}
                onSpanLinkClick={handleSetModalData}
              />

            ))}
            
          </div>
        </div>
    
        <div className="moreInfoForm__submit">
          <label htmlFor="moreInfoFormTerms" className="moreInfoForm__label">
            Submit
          </label>
            
          <button 
            className={`moreInfoForm__submitButton ${
              !agreeToTerms || componentIsLoading ? "disabled" : ""}`.trim()}
            type="submit"
          >
            SUBMIT
          </button>
        </div>

      </form>
    </article>
  );
};

export default MoreInfoForm;