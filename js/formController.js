import { category, form, modal } from './elems.js';
import { getCategory, getGoods, postGoods } from './serviceAPI.js';
import { closeModal } from './modalController.js';
import { toBase64 } from './utils.js';
import { renderRow } from './tableView.js';
import { showPreview } from './previewController.js';
import { API_URI } from './var.js';

export const updateCategory = async () => {
  category.textContent = '';
  const categoryList = await getCategory();
  const categoryOption = categoryList.map((cat) => {
    const option = document.createElement('option');
    option.value = cat;
    return option;
  });
  category.append(...categoryOption);
};

export const formController = () => {
  updateCategory();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};
    for (const [key, val] of formData) {
      if (val) {
        data[key] = val;
      }
    }

    if (data.image.size) {
      data.image = await toBase64(data.image);
    } else {
      delete data.image;
    }

    const goods = await postGoods(data);
    renderRow(goods);
    updateCategory();
    closeModal(modal, 'd-block');
  });
};

export const fillingForm = async (id) => {
  const { title, category, description, display, price, image } =
    await getGoods(id);
  form.title.value = title;
  form.category.value = category;
  form.description.value = description.join('\n');
  form.display.value = display;
  form.price.value = price;
  form.imagesave.value = image;
  showPreview(`${API_URI}/${image}`)
};
