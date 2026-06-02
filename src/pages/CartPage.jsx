import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

// Shopping cart page
const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);
  const totalPrice = getTotalPrice();
  const shipping = totalPrice > 0 ? (totalPrice > 200 ? 0 : 10) : 0;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6 text-black">Shopping Cart</h1>
        <p className="text-xl text-gray-600 mb-8">Your cart is empty</p>
        <Link
          to="/products"
          className="inline-block bg-yellow-600 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-black">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-6 p-6 border-b hover:bg-gray-50 transition"
              >
                {/* Product Image */}
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-black mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{item.category}</p>
                  <p className="font-bold text-yellow-600">${item.price.toFixed(2)}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 border border-gray-300 rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-200 transition"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-200 transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition p-2"
                  title="Remove item"
                >
                  <Trash2 size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-24"
        >
          <h2 className="text-2xl font-bold mb-6 text-black">Order Summary</h2>

          <div className="space-y-4 mb-6 pb-6 border-b">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping:</span>
              <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax (8%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <span className="text-xl font-bold text-black">Total:</span>
            <span className="text-2xl font-bold text-yellow-600">${finalTotal.toFixed(2)}</span>
          </div>

          <Link
            to="/checkout"
            className="w-full block text-center bg-yellow-600 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition mb-3"
          >
            PROCEED TO CHECKOUT
          </Link>

          <Link
            to="/products"
            className="w-full block text-center border border-gray-300 text-black py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            CONTINUE SHOPPING
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CartPage;
