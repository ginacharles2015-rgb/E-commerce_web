import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import ProductProvider from './context/ProductContext';
import WishlistProvider from './context/WishlistContext';
import NavbarNew from './components/NavbarNew';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import Checkout from './pages/Checkout';

// Main App Component - Sets up routing and global context providers
function App() {
  return (
    <Router>
      <CartProvider>
        <ProductProvider>
          <WishlistProvider>
            <NavbarNew />
            <main className="pt-20 min-h-screen bg-gray-50">
              <Routes>
                {/* Home page route */}
                <Route path="/" element={<Home />} />
                
                {/* Products listing page */}
                <Route path="/products" element={<Products />} />
                
                {/* Single product details page */}
                <Route path="/product/:id" element={<ProductDetails />} />
                
                {/* Shopping cart page */}
                <Route path="/cart" element={<CartPage />} />
                
                {/* Wishlist page */}
                <Route path="/wishlist" element={<WishlistPage />} />
                
                {/* Checkout page */}
                <Route path="/checkout" element={<Checkout />} />
                
                {/* New Arrivals page */}
                <Route path="/new-arrivals" element={<Products filter="new" />} />
                
                {/* Sale products page */}
                <Route path="/sale" element={<Products filter="sale" />} />
              </Routes>
            </main>
            <Footer />
          </WishlistProvider>
        </ProductProvider>
      </CartProvider>
    </Router>
  );
}

export default App;