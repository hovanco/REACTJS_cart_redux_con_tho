import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import ProductsApi from "../api/products";
import products from '../api/products';

class Products extends Component {
  state = {
    products: [],
  };
  componentDidMount(){
    ProductsApi.getAll()
      .then(data => {
        this.setState({
          products: data
        })
        console.log({data});
      });
  }
  render() {
    return (
      <div>
        <h1>Products</h1>
        <div className="row">
          {this.state.products.map(product => 
            <div className={'col-4'} key={product.id}>
              <ProductItem product={product} />
            </div>
          )}
        </div>
     </div>
    );
  }
}
export default Products;
