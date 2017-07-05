export const ACTION_TYPES = {
  addProduct: 'ADD_PRODUCTS',
};

export function addProduct(product) {
  debugger;
  return {
    type: ACTION_TYPES.addProduct,
    payload: {
      product,
    }
  }
}
