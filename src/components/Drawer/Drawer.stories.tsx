import { Meta, StoryFn } from "@storybook/react";
import Drawer from "./Drawer";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";

export default {
  title: "Components/Drawer",
  component: Drawer,
  argTypes: {
    open: {
      type: "boolean",
    },
    backgroundOpacity: {
      type: "number",
    },
  },
} as Meta;

export const Default: StoryFn<typeof Drawer> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Abrir modal</button>
      <Drawer open={open} onOpenChange={setOpen}>
        <div style={{ background: "red", width: 300, height: "100%" }}>
          <h1>Example Drawer</h1>
          <DialogClose>Fechar</DialogClose>
        </div>
      </Drawer>
    </>
  );
};

export const Left: StoryFn<typeof Drawer> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Abrir modal</button>
      <Drawer position="left" open={open} onOpenChange={setOpen}>
        <div style={{ background: "red", width: 300, height: "100%", padding: 20 }}>
          <h1>Example Drawer</h1>
          <DialogClose>Fechar</DialogClose>
        </div>
      </Drawer>
    </>
  );
};
