import { form, image, preview } from "./elems.js";
import { toBase64 } from "./utils.js";

export const showPreview = (src) => {
  preview.src = src;
  preview.style.display = 'block';
};

export const hidePreview = () => {
  preview.src = '';
  preview.style.display = '';
};

export const previewController = () => {
  const imageFile = form.image; // image - значение атрибута name элемента формы
  image.addEventListener('change', () => {
    if (imageFile.files.length) {
      toBase64(imageFile.files[0]).then((src) => showPreview(src));
    }
  });
};