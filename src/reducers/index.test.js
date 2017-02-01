import { ACTION_TYPES } from '../actions';
import { products } from './index';

  it('adds a product on ADD_PRODUCT', () => {
    const action = {
      type: ACTION_TYPES.addProduct,
      payload: {
        product: {
          name: 'Sofa',
        }
      }
    };
    expect(products([], action)).toEqual([{
      name: 'Sofa',
    }]);
  });
