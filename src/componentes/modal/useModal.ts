import { useState } from "react";

export function useModal(initialValue: boolean): [
  boolean,
  () => void,
  () => void
] {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
}