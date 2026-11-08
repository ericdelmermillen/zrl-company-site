"use client";

import { type SyntheticEvent, useRef, useEffect } from "react";
import { useAppContext, useModalContext } from "@/hooks/hooks";
import "./Modal.scss";

const Modal= () => {
  const { scrollYPos, getPrevScrollYPosValue } = useAppContext();
  
  const { 
    showModal,
    modalTitle,
    modalText,
    modalConfirmCallback,
    modalInputs,
    handleClearModal
  } = useModalContext();

  const modalTextRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (modalConfirmCallback) {
      modalConfirmCallback();
    }
  };

  // useEffect to clear modal on esc press
  useEffect(() => {
    if (!showModal) {
      return;
    }

    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClearModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, handleClearModal]);


  // useEffect to reset the scroll position of the Modal when the modal opens
  useEffect(() => {
    let rafId: number;
    if (showModal && modalTextRef.current) {
      rafId = requestAnimationFrame(() => {
        if (modalTextRef.current) {
          modalTextRef.current.scrollTop = 0;
        }
      });
    }

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [showModal]);

  // useEffect to close modal on scroll
  useEffect(() => {
    if (showModal && (getPrevScrollYPosValue() !== scrollYPos)) {
      handleClearModal();
    }
  }, [scrollYPos, getPrevScrollYPosValue]);

  return (
    <div className={`modal ${showModal ? "show" : ""}`.trim()}>
      <div className="modal__overlay" onClick={handleClearModal} />

      <div className="modal__card">
        <div className="modal__content">
          <h2 className="modal__heading">
            {modalTitle}
          </h2>

          <div
            ref={modalTextRef}
            className={`modal__text ${modalConfirmCallback ? "" : "modal__text--informational"}`.trim()}
          >
            {modalText
              .split("\n")
              .filter(p => p.trim() !== "")
              .map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`modal__paragraph ${
                    /^\s*\d+[\.\):]?\s/.test(paragraph)
                      ? "modal__paragraph--numbered"
                      : ""
                  }`.trim()}
                >
                  {paragraph}
                </p>
              ))}

            {modalInputs && modalInputs.length > 0 

              ? (
                  <form 
                    id="modal-form"
                    className="modal__inputs"
                    onSubmit={handleSubmit}
                  >
                    {modalInputs.map(({ id, label, placeholder, ref, onChange }) => (
                      
                      <div key={id} className="modal__input-group">
                        <label className="modal__label" htmlFor={id}>
                          {label}
                        </label>
                        <input
                          id={id}
                          className="modal__input"
                          ref={ref}
                          placeholder={placeholder}
                          onChange={onChange}
                        />
                      </div>

                    ))}
                  </form>
                )
              : null
            }
          </div>

          <div className="modal__button-container">
            
            {modalConfirmCallback

              ? (
                  <button
                    className="modal__button"
                    type="submit"
                    form="modal-form"
                  >
                    Send
                  </button>
                ) 
              : null

            }

            <button
              className="modal__button"
              type="button"
              onClick={handleClearModal}
            >
              {modalConfirmCallback ? "Cancel" : "OK"}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Modal;