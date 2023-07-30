addEventListener("DOMContentLoaded", () => {
  addShowDialogEvent();
  addCloseDialogEvent();
  disableDialogEscapeKeyPress();
  handleOnClickDialogOutside()
});

const preventDefault = (event) => event.preventDefault();
const closeDialog = (dialogElement) => dialogElement.close();
const showDialog = (dialogElement) => dialogElement.showModal();
const getAllDialogElements = () => document.querySelectorAll('dialog')

const addShowDialogEvent = () => {
  const triggerDialogButtons = document.querySelectorAll(
    '[data-toggle="dialog"]'
  );

  for (const triggerButton of triggerDialogButtons) {
    triggerButton.addEventListener("click", () => {
      const targetDialog = document.querySelector(triggerButton.dataset.target);
      if (targetDialog === null) {
        throw new Error("Button data-target property is invalid");
      }

      showDialog(targetDialog);
    });
  }
};

const addCloseDialogEvent = () => {
  const closeDialogButtons = document.querySelectorAll('[data-dismiss="dialog');

  for (const closeButton of closeDialogButtons) {
    closeButton.addEventListener("click", () => {
      const dialogElement = closeButton.closest("dialog");
      closeDialog(dialogElement);
    });
  }
};

const disableDialogEscapeKeyPress = () => {
  const dialogsWithDisabledEscapeKey = document.querySelectorAll(
    '.dialog[data-keyboard="false"] , .dialog[data-backdrop="static"]'
  );

  for (const dialogElement of dialogsWithDisabledEscapeKey) {
    dialogElement.addEventListener("cancel", (event) => {
      preventDefault(event);
      applyShakeAnimation(dialogElement)
    });
  }
};

const handleOnClickDialogOutside = () => {
  const dialogElements = getAllDialogElements();
  for (const dialogElement of dialogElements) {
    addClickOutsideListener(dialogElement);
  }
}

const addClickOutsideListener = (dialogElement) => {
  dialogElement.addEventListener("click", (event) => {
    if (event.target === dialogElement) {
      if (dialogElement.dataset.backdrop !== "static") {
        closeDialog(dialogElement);
      } else {
        applyShakeAnimation(dialogElement);
      }
    }
  });
};

const applyShakeAnimation = (element) =>{
  element.classList.add("shake");
  setTimeout(() => {
    element.classList.remove("shake");
  }, 500);
}

