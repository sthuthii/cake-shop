import  { useState } from 'react';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Chocolate Cake', price: 20, quantity: 2 },
    { id: 1, name: 'Chocolate Cake', price: 20, quantity: 1 }
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name} - ${item.price} x {item.quantity}</p>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${getTotal()}</h3>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
