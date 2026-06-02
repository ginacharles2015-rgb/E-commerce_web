import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

// Home page with hero section and product showcases
const Home = () => {
  const { getNewArrivals, getBestSellers } = useContext(ProductContext);

  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&h=600&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white max-w-3xl mx-auto px-4"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-wider"
          >
            GINA'S <span className="text-yellow-600">LUXURY</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 font-light"
          >
            Discover Exquisite Fashion for the Modern Luxury Lifestyle here.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 justify-center flex-wrap"
          >
            <Link
              to="/products"
              className="bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition transform hover:scale-105 flex items-center gap-2"
            >
              SHOP NOW <ChevronRight size={24} />
            </Link>
            <Link
              to="/new-arrivals"
              className="border-2 border-yellow-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-yellow-600 hover:text-black transition transform hover:scale-105"
            >
              NEW COLLECTION
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-yellow-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* New Arrivals Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-black">NEW ARRIVALS</h2>
            <Link
              to="/new-arrivals"
              className="text-yellow-600 font-bold hover:text-yellow-500 flex items-center gap-2"
            >
              View All <ChevronRight size={20} />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {newArrivals.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-black">BEST SELLERS</h2>
            <Link
              to="/products"
              className="text-yellow-600 font-bold hover:text-yellow-500 flex items-center gap-2"
            >
              View All <ChevronRight size={20} />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {bestSellers.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 border border-yellow-600 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-3 text-yellow-600">FREE SHIPPING</h3>
              <p className="text-gray-400">On orders over $100. Fast and secure delivery worldwide.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 border border-yellow-600 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-3 text-yellow-600">LUXURY QUALITY</h3>
              <p className="text-gray-400">Premium materials and impeccable craftsmanship in every piece.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 border border-yellow-600 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-3 text-yellow-600">EASY RETURNS</h3>
              <p className="text-gray-400">30-day money-back guarantee. No questions asked.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
