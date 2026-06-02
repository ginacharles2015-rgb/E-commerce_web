import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Wishlist page
const WishlistPage = () => {
  const { wishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6 text-black">My Wishlist</h1>
        <p className="text-xl text-gray-600 mb-8">Your wishlist is empty</p>
        <Link
          to="/products"
          className="inline-block bg-yellow-600 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

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
      <h1 className="text-4xl font-bold mb-3 text-black">My Wishlist</h1>
      <p className="text-gray-600 mb-12">{wishlist.length} Items</p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {wishlist.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WishlistPage;
