import { useContext } from 'react';
import { productContext } from '../stores/ProductContex.jsx';

const Cart = () => {
  const { cart, setCart } = useContext(productContext);

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
    }
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-300 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-300 px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                  
                  <p className="font-bold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-white p-4 rounded shadow">
            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded w-full font-bold">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
