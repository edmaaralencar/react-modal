import React from "react";
import "./modal.css";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence } from "framer-motion";

const variantScale = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

type ModalProps = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  children: JSX.Element;
  variant?: {
    hidden: Record<string, any>;
    visible: Record<string, any>;
    exit: Record<string, any>;
  };
  backgroundOpacity?: 0|0.1|0.2|0.3|0.4|0.5|0.6|0.7|0.8|0.9|1;
};

function Modal({
  open,
  onOpenChange,
  variant = variantScale,
  children,
  backgroundOpacity = 0.8
}: ModalProps) {
  if (!children) {
    throw new Error();
  }

  const clonedElement = React.cloneElement(children, {
    ...children.props,
    children: (
      <motion.div
        variants={variant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    ),
  });

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay forceMount asChild>
              <motion.div
                style={{
                  backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`
                }}
                className="backdrop"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <div className="content-container">
                {clonedElement.props.children}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

export const ModalClose = Dialog.DialogClose
export const ModalTitle = Dialog.DialogTitle
export const ModalDescription = Dialog.DialogDescription

export default Modal;
