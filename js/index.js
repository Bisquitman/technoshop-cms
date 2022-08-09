import { modal, modalOpenBtn } from "./elems.js";
import { modalController } from "./modalController.js";
import { previewController } from "./previewController.js";

modalController({
  modal: modal,
  btn: modalOpenBtn,
  classOpen: 'd-block',
  classClose: 'btn-close',
});

previewController();