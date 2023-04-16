import { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal";
import { DialogClose } from "@radix-ui/react-dialog";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    open: {
      type: "boolean",
    },
    backgroundOpacity: {
      type: 'number'
    }
  },
} as Meta;

export const Default: StoryFn<typeof Modal> = (args) => (
  <Modal {...args}>
    <div style={{ background: "red", width: 300, height: 300 }}>
      <h1>Example Modal</h1>
      <DialogClose>Fechar</DialogClose>
    </div>
  </Modal>
);
