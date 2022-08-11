import { API_URI } from './var.js';

export const getGoods = (id) => {
  return fetch(`${API_URI}/api/goods/${id ? id : '?nopage=true'}`).then(
    (response) => response.json(),
  );
};
// Второй способ, через async/await
/* 
export const getGoods = async () => {
  const response = await fetch(`${API_URI}/goods/?nopage=true`);
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status);
};
*/

export const postGoods = async (data) => {
  const response = await fetch(`${API_URI}/api/goods`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status);
};

// export const editGoods = async (data, id) => {
//   const response = await fetch(`${API_URI}/api/goods/${id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
//   if (response.ok) {
//     return response.json();
//   }
//   throw new Error(response.status);
// };

export const getCategory = async () => {
  const response = await fetch(`${API_URI}/api/category`);
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status);
};
