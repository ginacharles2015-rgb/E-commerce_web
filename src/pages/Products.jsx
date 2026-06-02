import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

// Products listing page with filtering and search
const Products = ({ filter = null }) => {
  const { filteredProducts, filterByCategory, products } = useContext(ProductContext);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Women', 'Men', 'Accessories'];

  // Filter products based on type
  let displayProducts = filteredProducts;
  
  if (filter === 'new') {
    displayProducts = products.filter(p => p.isNew);
  } else if (filter === 'sale') {
    displayProducts = products.filter(p => p.isSale && p.discount > 0);
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    filterByCategory(category);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-black">
          {filter === 'new' ? 'NEW ARRIVALS' : filter === 'sale' ? 'SALE' : 'SHOP'}
        </h1>
        <p className="text-gray-600">
          {displayProducts.length} Products Available
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryChange(category)}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              activeCategory === category
                ? 'bg-yellow-600 text-black'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Products Grid */}
      {displayProducts.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {displayProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No products found</p>
        </div>
      )}
    </div>
  );
};

export default Products;
