import Chance from 'chance';
export const chance = Chance();

export function generateProducts(numberOfProducts) {
  return Array.from({length: numberOfProducts}, () => ({
    id: chance.guid(),
    name: chance.word(),
    department: chance.word(),
    price: chance.dollar({max: 1000}),
    stock: chance.integer({min: 0, max: 20}),
    type: chance.word(),
  }));
}
