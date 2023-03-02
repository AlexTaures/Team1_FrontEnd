import React, { useState, useRef } from 'react';
import "../../styles/shoppincart.css"

export default function ShoppingCarV2() {

  const [cart, setCart] = useState({
    items: [],
    total: 0
  });
  const refAmount = useRef(null);

  function addItemToCart(item) {
    const existingItemIndex = cart.items.findIndex(i => i.name === item.name);
    if (existingItemIndex >= 0) {
      const updatedItems = [...cart.items];
      const existingItem = updatedItems[existingItemIndex];
      const updatedItem = { ...existingItem, amount: existingItem.amount + item.amount };
      updatedItems[existingItemIndex] = updatedItem;
      const updatedTotal = updatedItems.reduce((total, item) => total + item.price * item.amount, 0);
      setCart({
        items: updatedItems,
        total: updatedTotal
      });
    } else {
      setCart(prevCart => ({
        items: [...prevCart.items, item],
        total: prevCart.total + item.price * item.amount
      }));
    }
  }

  function updateItemQuantity(index, amount) {
    if (amount >= 0) {
      const updatedItems = [...cart.items];
      const updatedItem = { ...updatedItems[index], amount: Number(amount) };
      updatedItems[index] = updatedItem;

      const updatedTotal = updatedItems.reduce((total, item) => total + item.price * item.amount, 0);

      setCart({
        items: updatedItems,
        total: updatedTotal
      });
    }
  }

  function removeItemFromCart(index) {
    const updatedItems = [...cart.items];
    const removedItem = updatedItems.splice(index, 1)[0];

    const updatedTotal = updatedItems.reduce((total, item) => total + item.price * item.amount, 0);

    setCart({
      items: updatedItems,
      total: updatedTotal
    });

  
  }

  function clearCart() {
    if (window.confirm("Are you sure you want to empty your cart?")) {
      setCart({
        items: [],
        total: 0
      });
    }
  }

  function addProduct() {
    addItemToCart({ name: 'Product Name', price: 10, amount: 1 });
  }

  return (
    <>
      <div className="container-fluid mt-4 text-center">
        <h1>Shopping cart</h1>
        <div className="container data-cost">
          <p className="fs-4 col-xl-6 col-sm-10">Total products: {cart.items.length}</p>
          <p className="fs-4 col-xl-6 col-sm-10">Total to pay: ${cart.total}</p>
        </div>
        <div className="container text-start mt-3">
          <h3>Selected products</h3>

          <div className="cotainer mt-2 container-selected-products">
            <ul>
              {cart.items.map((item, index) => (
                <li key={index}>
                  <div className="card" style={{ width: "15rem" }}>
                    <img src="..." className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}.</p>
                      <div className="cotainer amount-product aling-middle">
                        <div className="container-xxl text-start">
                          <p>Amount: {item.amount}</p>
                          <p>Price: ${item.price}</p>
                        </div>

                        <input className="col-xl-4" type="number" min="1" value={item.quantity} onChange={(event) => updateItemQuantity(index, event.target.value)} ref={refAmount} />
                      </div>
                      <div className="container text-center mt-2">
                        <button href="#" className="btn btn-primary" onClick={() => removeItemFromCart(index)}>Remove to cart</button>
                      </div>

                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container-products-available mt-3 text-start">
          <h2>Products available</h2>
          <nav class="navbar navbar-expand-lg bg-body-tertiary col-xl-7">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Search prodcts</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Seleccionar categoria
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Todos</a></li>
                      <li><a class="dropdown-item" href="#">Category 1</a></li>
                      <li><a class="dropdown-item" href="#">Category 2</a></li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>

          <div className="cotainer mt-2 container-selected-products">
            <div className="card" style={{ width: "15rem" }}>
              <img src="..." className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Jabon Max</h5>
                <p className="card-text">Jabon para ropa con olor a girasoles y a primavera.</p>
                <div className="cotainer amount-product aling-middle">
                  <div className="container-xxl text-start">
                    <p>Price: </p>
                  </div>
                </div>
                <div className="container text-center mt-2">
                  <button href="#" className="btn btn-primary" onClick={addProduct}>Add to cart</button>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
