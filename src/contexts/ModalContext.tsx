"use client";

import { useState, createContext} from "react";
import { 
  type ChildrenProps, 
  type ModalInput,
  type ModalContextValue,
  OpenModalOptions
} from "@/typing/interfaces";
import { type ModalType } from "@/typing/types";

const MIN_LOADING_INTERVAL = parseInt(process.env.NEXT_PUBLIC_MIN_LOADING_INTERVAL || "250", 10);

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

const ModalContextProvider = ({ children }: ChildrenProps) => {
  const [ showModal, setShowModal ] = useState<boolean>(false);
  const [ modalType, setModalType ] = useState<ModalType | null>(null);
  const [ modalTitle, setModalTitle ] = useState<string>("");
  const [ modalText, setModalText ] = useState<string>("");
  const [ modalInitialFormCheck , setModalInitialFormCheck ] = useState<boolean>(false);
  const [ modalInputs, setModalInputs ] = useState<ModalInput[] | null>(null);
  const [ modalConfirmCallback, setModalConfirmCallback ] = useState<(() => void) | null>(null);

  const handleOpenModal = ({ modalType, modalTitle, modalText, inputs }: OpenModalOptions) => {
    setShowModal(true);
    setModalType(modalType);
    setModalTitle(modalTitle);
    setModalText(modalText);
    setModalInputs(inputs || null);
  };

  const handleClearModal = (): void => {
    setShowModal(false);
    setModalInitialFormCheck(false);
    setModalConfirmCallback(null);
    setModalInputs(null);
    
    setTimeout(() => {
      setModalTitle("");
      setModalText("");
    }, MIN_LOADING_INTERVAL);
  };

  const contextValues ={
    showModal, 
    setShowModal,
    modalType, 
    setModalType,
    modalTitle, 
    setModalTitle,
    modalText, 
    setModalText,
    modalInitialFormCheck,
    setModalInitialFormCheck,
    modalInputs, 
    setModalInputs,
    modalConfirmCallback, 
    setModalConfirmCallback,
    handleOpenModal,
    handleClearModal
  };

  return (
    <ModalContext.Provider value={contextValues}>
      {children}
    </ModalContext.Provider>
  );
};

export {
  ModalContext,
  ModalContextProvider
};