import { createContext, useContext, useState, ReactNode } from "react";

export interface ModalState {
  openModal?: null | boolean | string;
  closeModal?: () => void;
  openSpecificModal?: (modalName: string) => void;
}

const GlobalModalContext = createContext<ModalState | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(GlobalModalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

interface GlobalProviderProps {
  children: ReactNode;
}

export const ModalContextProvider = ({ children }: GlobalProviderProps) => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const openSpecificModal = (modalName: string) => {
    setOpenModal(modalName);
  };

  const closeModal = () => {
    setOpenModal(null);
  };
  return (
    <GlobalModalContext.Provider
      value={{ openModal, openSpecificModal, closeModal }}
    >
      {children}
    </GlobalModalContext.Provider>
  );
};
