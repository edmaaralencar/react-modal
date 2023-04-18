import React from "react";
import "./drawer.css";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence } from "framer-motion";

const variantScale = (position: string, width: number) => ({
  hidden: {
    opacity: 0,
    x: position === "right" ? width : -width,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  exit: {
    x: position === "right" ? width : -width,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
});

type DrawerProps = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  children: JSX.Element;
  backgroundOpacity?:
    | 0
    | 0.1
    | 0.2
    | 0.3
    | 0.4
    | 0.5
    | 0.6
    | 0.7
    | 0.8
    | 0.9
    | 1;
  position?: "right" | "left";
  width?: number;
};

function Drawer({
  open,
  onOpenChange,
  children,
  backgroundOpacity = 0.8,
  position = "right",
  width = 300,
}: DrawerProps) {
  if (!children) {
    throw new Error();
  }

  const clonedElement = React.cloneElement(children, {
    ...children.props,
    children: (
      <motion.div
        variants={variantScale(position, width)}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          height: "100%",
        }}
      >
        {children}
      </motion.div>
    ),
  });

  let style;

  if (position === "right") {
    style = { right: 0 };
  } else {
    style = { left: 0 };
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay forceMount asChild>
              <motion.div
                style={{
                  backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
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
              <div
                className="drawer-container"
                style={{ ...style, maxWidth: width, width: "100%" }}
              >
                {clonedElement.props.children}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

export const DrawerClose = Dialog.DialogClose;
export const DrawerTitle = Dialog.DialogTitle;
export const DrawerDescription = Dialog.DialogDescription;

export default Drawer;
