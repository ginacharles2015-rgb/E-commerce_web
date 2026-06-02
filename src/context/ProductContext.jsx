import React, { createContext, useState, useEffect } from 'react';
import { Products } from '../data/products';

// Create Product Context for managing products globally
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // State to store all products
  const [products, setProducts] = useState(Products);
  
  // State for filtered/searched products
  const [filteredProducts, setFilteredProducts] = useState(Products);
  
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products by category
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(prod => prod.category === category));
    }
  };

  // Search products by name
  const searchProducts = (searchTerm) => {
    if (!searchTerm.trim()) {
      filterByCategory(selectedCategory);
      return;
    }
    
    const searched = products.filter(prod =>
      prod.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || prod.category === selectedCategory)
    );
    
    setFilteredProducts(searched);
  };

  // Get new arrivals (products marked as new)
  const getNewArrivals = () => {
    return products.filter(prod => prod.isNew).slice(0, 8);
  };

  // Get best sellers (products with high ratings)
  const getBestSellers = () => {
    return products.filter(prod => prod.rating >= 4.8).slice(0, 8);
  };

  // Get sale products (products with discount)
  const getSaleProducts = () => {
    return products.filter(prod => prod.isSale && prod.discount > 0).slice(0, 8);
  };

  // Get related products for product details page
  const getRelatedProducts = (productId, category) => {
    return products
      .filter(prod => prod.category === category && prod.id !== productId)
      .slice(0, 4);
  };

  const value = {
    products,
    filteredProducts,
    selectedCategory,
    filterByCategory,
    searchProducts,
    getNewArrivals,
    getBestSellers,
    getSaleProducts,
    getRelatedProducts
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
