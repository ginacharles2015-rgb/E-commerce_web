import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { Products } from '../Products.js'

export const productContext = createContext()

const ProductContext = ({children}) => {
  const [products, setProducts] = useState(Products)
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart')

  
    return storedCart ? JSON.parse(storedCart) : []
  })

//   const [loading, setLoading] = useState(false)

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


// create add to cart function, if product already in cart, then increase quantity, else add to cart
  const addToCart = (prd) => {

    const existingItem = cart.find(item => item.id === prd.id)
    if (existingItem) {
      setCart(cart.map(item => item.id === prd.id ? {...item, quantity: item.quantity + 1} : item))
    } else {
      setCart([...cart, {...prd, quantity: 1}])
    }
  }

  // get total price

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)


  // remove items from cart

  const removeItems = (id)=>{
    // filter the elements in the cart that does not have the id in the parameter

    const filteredProduct = cart.filter((item) => item.id !== id)

    // update the cart to show all the elements that do not have the id in the parameter
    setCart(filteredProduct)

  } 

  const clearCart = ()=>{
    setCart([])
  }






  return (
    <productContext.Provider value={{products, setProducts, cart, setCart, addToCart, totalPrice, removeItems, clearCart}}>
      {children}
    </productContext.Provider>
  )
}

export default ProductContext


// what is the filter method in javascript used for?

// The filter method in JavaScript is used to create a new array with all elements that pass a test implemented by a provided function. It takes a callback function as an argument, which is called for each element in the array. If the callback function returns true for an element, that element is included in the new array; if it returns false, the element is excluded. This method does not modify the original array and returns a new array containing only the elements that satisfy the condition specified in the callback function.

// Example usage of the filter method:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);