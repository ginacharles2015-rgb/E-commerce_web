import React, { createContext, useState, useEffect } from 'react';

// Create Wishlist Context for managing wishlist globally
export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  // State to store wishlist items
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('ginas_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('ginas_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Add item to wishlist
  const addToWishlist = (product) => {
    const exists = wishlist.some(item => item.id === product.id);
    
    if (!exists) {
      setWishlist([...wishlist, product]);
    }
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  // Check if product is in wishlist
  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  // Toggle wishlist (add if not exists, remove if exists)
  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Clear entire wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
    clearWishlist
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
