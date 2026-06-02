import React, { createContext, useState, useEffect } from 'react';

// Create Cart Context for managing cart state globally
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // State to store cart items
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('ginas_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('ginas_cart', JSON.stringify(cart));
  }, [cart]);

  // Add item to cart - increases quantity if item already exists
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      // If product already in cart, increase quantity
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Add new product to cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update quantity of item in cart
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total price of all items in cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Get total number of items in cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
