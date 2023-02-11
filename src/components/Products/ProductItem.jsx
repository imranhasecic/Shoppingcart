import React from "react";
import "./Products.css"


const ProductItem = (props) => {
    const item= props.singleItem
    return(
        <div className="main">
        <li>
            <h1>{item.title}</h1>
            <h4>Quantity:{item.quantity}</h4>
            <h4>Price:{item.price}</h4>
        </li>
        </div>
    )
}

export default ProductItem
