import faker from 'faker';

export function generateProducts(numberOfProducts, products = []) {

  if (numberOfProducts === 0) return products;

  products.push({
    name: faker.commerce.productName(),
    department: faker.commerce.department(),
    price: faker.commerce.price(),
    stock: Math.floor(Math.random()*(10 - 2) + 0),
    type: faker.commerce.product(),
  });
  return generateProducts(numberOfProducts - 1, products);
}
