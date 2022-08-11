import { tableGoods } from './elems.js';
import { createElem, currencyFormatRUB } from './utils.js';

export const renderRow = ({ id, title, category, price }) => {
  const colId = createElem('td', {
    textContent: id,
  });
  const colTitle = createElem('td', {
    textContent: title,
  });
  const colCategory = createElem('td', {
    textContent: category,
  });
  const colPrice = createElem('td', {
    className: 'text-end',
    textContent: currencyFormatRUB(price),
  });
  const delBtn = createElem('button', {
    className: 'btn-table btn-delete',
    innerHTML: `
      <svg width="30" height="30">
        <use xlink:href="#delete" />
      </svg>`,
  });
  const colDel = createElem('td', {
      className: 'd-flex',
    },
    delBtn,
  );

  const goodsRow = createElem('tr', {
      className: 'table-row table-goods-item',
    },
    [colId, colTitle, colCategory, colPrice, colDel],
  );
  goodsRow.dataset.id = id;

  // tableGoods.insertAdjacentHTML(
  //   'beforeend',
  //   `
  //   <tr class="table-row table-goods-item" data-id="${id}">
  //     <td>${id}</td>
  //     <td>${title}</td>
  //     <td>${category}</td>
  //     <td class="text-end">${currencyFormatRUB(price)}</td>
  //     <td class="d-flex">
  //       <button class="btn-table btn-delete">
  //         <svg width="30" height="30">
  //           <use xlink:href="#delete" />
  //         </svg>
  //       </button>
  //     </td>
  //   </tr>
  // `,
  // );
  tableGoods.append(goodsRow);
};

export const tableRender = (goods) => {
  tableGoods.textContent = '';

  goods.forEach(renderRow);
};