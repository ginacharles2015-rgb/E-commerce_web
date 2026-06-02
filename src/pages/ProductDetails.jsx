import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import { Heart, ShoppingBag, Star, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

// Product details page
const ProductDetails = () => {
  const { id } = useParams();
  const { products, getRelatedProducts } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { isInWishlist, toggleWishlist } = useContext(WishlistContext);

  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-black">Product not found</h1>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
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
      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-yellow-600 font-bold uppercase text-sm mb-2">{product.category}</p>
          <h1 className="text-4xl font-bold text-black mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={`${
                  i < Math.round(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600">({product.rating})</span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <p className="text-4xl font-bold text-black mb-2">
              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
            </p>
            {product.discount > 0 && (
              <p className="text-lg text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-bold text-black">Quantity:</span>
            <div className="flex items-center gap-3 border border-gray-300 rounded px-4 py-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="hover:text-yellow-600 transition"
              >
                <Minus size={20} />
              </button>
              <span className="font-bold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="hover:text-yellow-600 transition"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-yellow-600 text-black py-4 rounded-lg font-bold hover:bg-yellow-500 transition flex items-center justify-center gap-2"
            >
              <ShoppingBag size={24} />
              ADD TO CART
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              className={`px-6 py-4 rounded-lg font-bold transition ${
                inWishlist
                  ? 'bg-red-500 text-white'
                  : 'border border-gray-300 text-black hover:bg-gray-100'
              }`}
            >
              <Heart size={24} fill={inWishlist ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Shipping Info */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Free shipping</strong> on orders over $100 • <strong>30-day return</strong> policy
            </p>
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-black mb-8">Related Products</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {relatedProducts.map((relatedProduct) => (
              <motion.div key={relatedProduct.id} variants={itemVariants}>
                <ProductCard product={relatedProduct} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
