export const ACTION_TYPES = {
  addProduct: 'ADD_PRODUCT',
}

export function addProduct(product) {
  return {
    type: ACTION_TYPES.addProduct,
    payload: {
      product,
    }
  }
}
