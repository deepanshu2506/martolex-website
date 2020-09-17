import { backendApi } from "../config";

export const getCategorytreeApi = backendApi + "categories/tree";
export const loginApi = backendApi + "auth/signIn";
export const categorySearchApi = (catId) =>
  backendApi + `books/cat/${catId}?limit=12`;
export const subCategorySearchApi = (catId, subCatId) =>
  `${backendApi}books/cat/${catId}/subCat/${subCatId}?limit=12`;
export const searchApi = (query) => `${backendApi}books/search${query}`;

export const productDetailsApi = (bookId) => `${backendApi}books/${bookId}`;

const userApi = `${backendApi}user`;
export const cartApi = `${userApi}/cart`;

export const bookReviewAPI = `${userApi}/books/review`;

export const updateCartQuantityApi = `${cartApi}/modifyQty`;

export const UserAddressesApi = `${userApi}/profile/addresses`;

export const ordersApi = {
  cod: `${userApi}/order/cod`,
  online: `${userApi}/order/online`,
  orderDetails: (orderId) => `${userApi}/order/${orderId}`,
  getOrders: `${userApi}/order/`,
};
