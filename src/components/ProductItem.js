import React from "react";
import { Link } from "react-router-dom";
import products from "../api/products";

function ProductItem (props){
  const {product} = props;
  return(
    <div className="card">
      <img src={product.image} className="card-img-top"  alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        {product.name}
        <p className="card-text">
          Price {product.price}$
        </p>
        <Link to={"/products/" + product.id} className="btn btn-primary">Details</Link>
      </div>
    </div>
  );
}
export default ProductItem;