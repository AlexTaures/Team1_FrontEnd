import React, { useState } from 'react';
import '../../styles/ShoppingCart.css';

function ShoppingCart() {
  const [cart, setCart] = useState({
    items: [],
    total: 0
  });

  function addItemToCart(item) {
    const existingItemIndex = cart.items.findIndex(i => i.name === item.name);
    if (existingItemIndex >= 0) {
      const updatedItems = [...cart.items];
      const existingItem = updatedItems[existingItemIndex];
      const updatedItem = { ...existingItem, quantity: existingItem.quantity + item.quantity };
      updatedItems[existingItemIndex] = updatedItem;
      const updatedTotal = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);
      setCart({
        items: updatedItems,
        total: updatedTotal
      });
    } else {
      setCart(prevCart => ({
        items: [...prevCart.items, item],
        total: prevCart.total + item.price * item.quantity
      }));
    }
  }

  function updateItemQuantity(index, quantity) {
    if (quantity >= 0) {
      const updatedItems = [...cart.items];
      const updatedItem = { ...updatedItems[index], quantity: Number(quantity) };
      updatedItems[index] = updatedItem;

      const updatedTotal = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);

      setCart({
        items: updatedItems,
        total: updatedTotal
      });
    }
  }

  function removeItemFromCart(index) {
    const updatedItems = [...cart.items];
    const removedItem = updatedItems.splice(index, 1)[0];

    const updatedTotal = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);

    setCart({
      items: updatedItems,
      total: updatedTotal
    });

    alert(`Removed ${removedItem.name} from cart`);
  }

  function clearCart() {
    if (window.confirm("Are you sure you want to empty your cart?")) {
      setCart({
        items: [],
        total: 0
      });
    }
  }

  function addProduct1() {
    addItemToCart({ name: 'Product 1', price: 10, quantity: 1 });
  }

  function addProduct2() {
    addItemToCart({ name: 'Product 2', price: 20, quantity: 1 });
  }

  function addProduct3() {
    addItemToCart({ name: 'Product 3', price: 30, quantity: 1 });
  }

  return (
    <div className="shopping-cart">
      <h5>Shopping Cart</h5>
      <ul>
        {cart.items.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>Cantidad: {item.quantity} Precio: ${item.price}</span>
            <input type="number" value={item.quantity} onChange={(event) => updateItemQuantity(index, event.target.value)} />
            <button onClick={() => removeItemFromCart(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h6>Total: ${cart.total}</h6>
      <div className="buttons">
        <button onClick={addProduct1}>Add Product 1</button>
        <button onClick={addProduct2}>Add Product 2</button>
        <button onClick={addProduct3}>Add Product 3</button>
        <button onClick={clearCart}>Empty Cart</button>
      </div>
    </div>
  );
}
export default ShoppingCart;