import { useModal } from "../componentes/modal/useModal";
import { useState } from "react";

export const useHeaderController = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenModal4, openModal4, closeModal4] = useModal(false);

  const [user, setUser] = useState("");

  return {
    user,
    setUser,
    isOpenModal1,
    isOpenModal2,
    isOpenModal3,
    isOpenModal4,
    openModal1,
    openModal2,
    openModal3,
    openModal4,
    closeModal1,
    closeModal2,
    closeModal3,
    closeModal4,
  };
};