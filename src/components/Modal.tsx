import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { useFocusTrap } from "../hooks/useFocusTrap";

type ModalOverlayProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  closeOnOverlay?: boolean;
  overlayClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  isOpen,
  onClose,
  children,
  closeOnOverlay = true,
  overlayClassName = "",
  ...divProps
}) => {
  const modalRoot = document.getElementById("modal-root");
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useFocusTrap(contentRef, isOpen);

  // control body scrolling
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      previouslyFocusedElement.current?.focus?.(); // restore focus on modal close
    };
  }, [isOpen]);

  // close modal when escape key is press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !modalRoot) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlay && onClose) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      ref={contentRef}
      className={`modal-overlay ${overlayClassName}`}
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        {...divProps}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
};
