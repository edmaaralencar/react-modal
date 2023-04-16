# @edmaralencar/modal

https://user-images.githubusercontent.com/76753377/232330339-03a9e9f3-48a3-43ca-ab0a-109da3d1c89c.mov

## Installation

- Use `yarn add @edmaralencar/modal` or `npm install @edmaralencar/modal`

## Description
This library is made with Framer Motion and Radix UI (React Dialog) and it simplifies the building of a modal with animations.

## Usage
To use, you have to followe the instructions down below:

OBS: The Modal component can only have 1 direct children, which its gonna receive all the animations.

- Import the Modal component;
- There is also ModalTitle, ModalDescription and ModalClose, which all of them are the same as the Radix UI ones.
- Pass the props:
	- children: This is the modal content itself.
	- open: current state of modal (if true, the modal is open, else is closed).
	- onOpenChange: function that changes the current state of modal.
	-  variant (optional): it comes with a default animation, but you can change it using this props
		- it has to follow the current structure:  <img width="1470" alt="Captura de Tela 2023-04-16 às 14 21 34" src="https://user-images.githubusercontent.com/76753377/232330015-36ba6342-b44c-4fc8-b73b-731c5ecae43c.png">
	-  backgroundOpacity (optional) (values can be 0 to 1): changes the background opacity.
- Build your own modal.

## Example
<img width="1470" alt="Captura de Tela 2023-04-16 às 14 21 34" src="https://user-images.githubusercontent.com/76753377/232330271-cf88f173-9b9d-4493-93f3-d66e2a175313.png">
