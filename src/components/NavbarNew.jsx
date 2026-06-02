import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Heart, ShoppingBag, Search, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { ProductContext } from '../context/ProductContext';

// Responsive Navbar with luxury aesthetic
const NavbarNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { getTotalItems } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const { searchProducts } = useContext(ProductContext);

  const cartCount = getTotalItems();
  const wishlistCount = wishlist.length;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchProducts(searchTerm);
      navigate('/products');
      setSearchTerm('');
      setIsSearchOpen(false);
    }
  };

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Women', path: '/products' },
    { name: 'Men', path: '/products' },
    { name: 'Accessories', path: '/products' },
    { name: 'Sale', path: '/sale' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white z-50 shadow-lg border-b border-yellow-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold tracking-widest"
            >
              GINA'S <span className="text-yellow-600">LUXURY</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-sm font-medium hover:text-yellow-600 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:text-yellow-600 transition"
            >
              <Search size={20} />
            </button>

            {/* Wishlist Icon */}
            <Link
              to="/wishlist"
              className="relative p-2 hover:text-yellow-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 hover:text-yellow-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Profile Icon */}
            <button className="p-2 hover:text-yellow-600 transition">
              <User size={20} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:text-yellow-600 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar - Dropdown */}
        {isSearchOpen && (
          <motion.form
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSearch}
            className="pb-4"
          >
            <input
              type="text"
              placeholder="Search luxury fashion..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 text-white rounded border border-yellow-600 focus:outline-none focus:border-yellow-400"
            />
          </motion.form>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-gray-950 border-t border-yellow-600"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="block py-2 hover:text-yellow-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavbarNew;
