import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-yellow-600 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-yellow-600 mb-4">GINA'S LUXURY</h3>
            <p className="text-gray-400 text-sm">Premium fashion for the modern luxury lifestyle. Curated collections of designer clothing and accessories.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-yellow-600 transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-yellow-600 transition">Shop</Link></li>
              <li><Link to="/sale" className="hover:text-yellow-600 transition">Sale</Link></li>
              <li><Link to="/about" className="hover:text-yellow-600 transition">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-yellow-600 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition">Returns</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-3">Subscribe to get special offers and updates</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-gray-900 text-white text-sm flex-1 border border-yellow-600 focus:outline-none"
              />
              <button className="px-3 py-2 bg-yellow-600 text-black font-bold hover:bg-yellow-500 transition">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition" title="Facebook">
                f
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition" title="Instagram">
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition" title="Twitter">
                𝕏
              </a>
            </div>
            <p className="text-gray-400 text-sm">&copy; 2024 Gina's Luxury. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
