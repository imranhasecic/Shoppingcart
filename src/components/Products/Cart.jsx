import React from 'react'
import { products } from '../Data/listOfProducts'

const Cart = () => {

    const productsQuantity = products.reduce((quantity, item) => {
        return quantity + item.quantity
    }, 0)


    const productsPrice = products.reduce((accumulator, item) => {
        return accumulator + (item.price * item.quantity)
    }, 0)

  return (
    <div>
        <h1>Number of products: {productsQuantity}</h1>
        <h1>Total price: {productsPrice}$</h1>
    </div>
  )
}

export default Cart