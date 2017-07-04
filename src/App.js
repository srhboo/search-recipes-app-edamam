import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addProduct } from './actions';
import Chance from 'chance';
export const chance = Chance();

/* TODO: HOMEWORK!!!!!
 *
 * 1. Create the action to remove a product, and update the state to remove a product by id
 * 2. OPTIONAL: Create more flexible product making form that will allow you to make a product with all field data
 * 3. OPTIONAL: Create a filter search bar that allows you to shrink the list of products by whats typed!
 *            hint: it would help if you updated the global state with every keystroke!
  * */

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = {
  addProduct,
};

class App extends Component {
  componentDidMount() {
    this.props.addProduct({
      id: chance.guid(),
      name: 'Table',
      department: 'Furniture',
      price: '300.00',
      stock: 5,
    });
  }

  render() {
    const { products, addProduct } = this.props;
    return (
      <div>
        {products.map(product => <div>{product.name}</div>)}
        <button onClick={ () => addProduct({ name: 'Sofa' }) }>Add Sofa</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
