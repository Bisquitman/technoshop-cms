export const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener('loadend', () => {
      resolve(reader.result);
    });

    reader.addEventListener('error', (err) => {
      reject(err);
    });

    reader.readAsDataURL(file);
  });
};

export const currencyFormatRUB = (num) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(num);
};

export const createElem = (tag, attr, children) => {
  const elem = document.createElement(tag);
  Object.assign(elem, { ...attr });

  if (children) {
    if (Array.isArray(children)) {
      elem.append(...children);
    } else {
      elem.append(children);
    }
  }

  return elem;
};
