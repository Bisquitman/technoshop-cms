import { modal, modalOpenBtn } from "./elems.js";
import { formController } from "./formController.js";
import { modalController } from "./modalController.js";
import { previewController } from "./previewController.js";
import { tableController } from "./tableController.js";

const init = () => {
  modalController({
    modal: modal,
    btn: modalOpenBtn,
    classOpen: 'd-block',
    classClose: 'btn-close',
  });

  previewController();
  tableController();
  formController();
};

init();