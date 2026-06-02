import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Checkout page with customer form
const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (orderPlaced) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-6"
        >
          <div className="text-6xl text-yellow-600 mb-4">✓</div>
        </motion.div>
        <h1 className="text-4xl font-bold mb-4 text-black">Order Placed Successfully!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your purchase. You will receive a confirmation email shortly.
        </p>
        <Link
          to="/"
          className="inline-block bg-yellow-600 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6 text-black">Your cart is empty</h1>
        <Link
          to="/products"
          className="inline-block bg-yellow-600 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
        >
          Back to Shopping
        </Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  const totalPrice = getTotalPrice();
  const shipping = totalPrice > 200 ? 0 : 10;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shipping + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-black">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            {/* Shipping Information */}
            <h2 className="text-2xl font-bold mb-6 text-black">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="col-span-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="col-span-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="col-span-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="col-span-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600 mb-4"
            />

            <div className="grid grid-cols-3 gap-4 mb-8">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                required
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP"
                value={formData.zip}
                onChange={handleInputChange}
                required
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />
            </div>

            {/* Payment Information */}
            <h2 className="text-2xl font-bold mb-6 text-black">Payment Information</h2>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600 mb-4"
            />

            <div className="grid grid-cols-2 gap-4 mb-8">
              <input
                type="text"
                name="cardExpiry"
                placeholder="MM/YY"
                value={formData.cardExpiry}
                onChange={handleInputChange}
                required
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />
              <input
                type="text"
                name="cardCVC"
                placeholder="CVC"
                value={formData.cardCVC}
                onChange={handleInputChange}
                required
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 text-black py-4 rounded-lg font-bold hover:bg-yellow-500 transition text-lg"
            >
              PLACE ORDER
            </button>
          </motion.form>
        </div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 h-fit sticky top-24"
        >
          <h2 className="text-2xl font-bold mb-6 text-black">Order Summary</h2>

          {/* Cart Items */}
          <div className="mb-6 pb-6 border-b max-h-64 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-4 text-sm">
                <span className="text-gray-600">
                  {item.name} <span className="font-bold">x{item.quantity}</span>
                </span>
                <span className="font-bold text-black">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="space-y-3 mb-6 pb-6 border-b">
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
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
