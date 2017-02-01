import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { addProduct } from './actions';


import { API_BASE_URL } from './constants/api-url';

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = {
  addProduct,
}

class App extends Component {
  componentDidMount() {
    this.props.addProduct({
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
