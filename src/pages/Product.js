import React, { Component } from 'react';
import {getById } from "../api/products";
import { addToCart } from "../store/actions/Actions";
import { connect } from "react-redux";


class Product extends Component {
  state = { 
    loading: true,
    quantity: 1,
    product: {

    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    getById(parseInt(id))
      .then(product => {
        this.setState({
          product,
          loading: false
        });
      })
  }

  handleQuantity = (event) =>  {
    const value = event.target.value;

    if(value < 1)
      return ;
    this.setState({
      quantity: value
    })
  }

  addToCart = (product) => {
    this.props.addToCart(product, this.state.quantity);
  }

  render() {
    if(this.state.loading){
      return "loading...";
    }

    const product = this.state.product;
    const quantity = this.state.quantity;

    return ( 

      <div>
        <h1>{product.name}</h1>
        <div className={'row'}>
          <div className="col-6">
            <img src={product.image} width={'100%'} />
          </div>
          <div className="col-6">
           <h1>{product.name}</h1>
           <p>{product.price}</p>
           <p>{product.description}</p>
           <br/><br/>
           <input type="number" value={quantity} onChange={this.handleQuantity} />
           {/* <input type="number" value={quantity} onChange={this.handleQuantity} name="quantity" min={1} /> */}
           <br/><br/>
           <p>Total: {quantity * product.price} </p>
           <button className="btn btn-primary" onClick={ () => this.addToCart(product)}>Add to cart</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productsInfo, quantity) => dispatch(addToCart(productsInfo, quantity)),
  };
}

export default connect(null, mapDispatchToProps)(Product);