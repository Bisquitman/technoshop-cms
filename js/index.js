import { modalOpenBtn } from "./elems.js";
import { formController } from "./formController.js";
import { modalController } from "./modalController.js";
import { previewController } from "./previewController.js";
import { tableController } from "./tableController.js";

const init = () => {
  modalController({
    btn: modalOpenBtn,
  });

  previewController();
  tableController();
  formController();
};

init();