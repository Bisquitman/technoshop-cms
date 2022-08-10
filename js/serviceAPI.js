import { API_URI } from "./var.js";

export const getGoods = () => {
  return fetch(`${API_URI}/goods/?nopage=true`)
    .then((response) => response.json());
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

export const getCategory = async () => {
  const response = await fetch(`${API_URI}/category`);
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status);
};
