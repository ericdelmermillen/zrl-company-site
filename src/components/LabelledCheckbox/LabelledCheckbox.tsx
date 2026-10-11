import { type ChangeEvent } from "react";
import { type LabelledCheckboxProps } from "@/typing/interfaces";
import "./LabelledCheckbox.scss";

const LabelledCheckbox = ({
  labelId,
  labelText,
  isChecked,
  setIsChecked,
  isValid,
  modalType,
  spanStub,
  spanLinkText,
  onSpanLinkClick,
 }: LabelledCheckboxProps) => {

  const handleIsClickedChange = (e: ChangeEvent<HTMLInputElement>): boolean => {
    setIsChecked(e.target.checked);
    return true;
  };

  const handleSpanLinkClick = (): void => {
    onSpanLinkClick(modalType)
  };

  return (
    <div className="labelledCheckbox">
      <label htmlFor={labelId} className="labelledCheckbox__label">
        {labelText}
      </label>

      <input
        id={labelId}
        type="checkbox"
        className={`labelledCheckbox__input
          ${isValid ? "" : "invalid"}`}
        checked={isChecked}
        onChange={handleIsClickedChange}
      />

      <span className="labelledCheckbox__text">
        {`${spanStub}`}
        <span
          className="labelledCheckbox__text-link"
          onClick={handleSpanLinkClick}
        >
          {spanLinkText}
        </span>
      </span>
    </div>
  );
};

export default LabelledCheckbox;