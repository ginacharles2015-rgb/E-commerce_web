import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

// Reusable Product Card Component with hover animations
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { isInWishlist, toggleWishlist } = useContext(WishlistContext);

  const inWishlist = isInWishlist(product.id);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        
        {/* Sale Badge */}
        {product.isSale && product.discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{product.discount}%
          </div>
        )}

        {/* New Badge */}
        {product.isNew && !product.isSale && (
          <div className="absolute top-3 right-3 bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-bold">
            NEW
          </div>
        )}

        {/* Quick Action Buttons - Show on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Link
            to={`/product/${product.id}`}
            className="bg-white text-black p-3 rounded-full hover:bg-yellow-600 hover:text-white transition"
            title="Quick View"
          >
            <Eye size={20} />
          </Link>
          <button
            onClick={() => toggleWishlist(product)}
            className={`p-3 rounded-full transition ${
              inWishlist
                ? 'bg-red-500 text-white'
                : 'bg-white text-black hover:bg-yellow-600 hover:text-white'
            }`}
            title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-600 text-black p-3 rounded-full hover:bg-yellow-500 transition"
            title="Add to Cart"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-yellow-600 font-semibold uppercase mb-2">{product.category}</p>

        {/* Product Name */}
        <h3 className="text-lg font-bold text-black mb-2 truncate">{product.name}</h3>

        {/* Rating Stars */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${
                i < Math.round(product.rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-xs text-gray-600 ml-2">({product.rating})</span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xl font-bold text-black">
              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
            </span>
            {product.discount > 0 && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-black text-white py-2 rounded hover:bg-yellow-600 transition duration-300 font-semibold text-sm"
        >
          ADD TO CART
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
