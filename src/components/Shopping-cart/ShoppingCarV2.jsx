import axios from 'axios';
import React, { useState, useRef, useEffect, useContext } from 'react';
import "../../styles/shoppincart.css";
import routes from "../../connection/BackendRoutes.json";
import { DataContext } from '../../context/Datacontext';

export default function ShoppingCarV2() {
  const [cart, setCart] = useState({
    items: [],
    total: 0
  });
  const refAmount = useRef(null);
  const [prod, setProd] = useState(null);
  const { searchText, selCat, searching } = useContext(DataContext);
  let filterCat = [];
  let filterText = [];
  //////////////////////////////////////////
  //Data fetching
  const setProducts = async () =>{

    try {
      await axios.get(routes['products'])
      .then(response => {


        //Filtering the data
        //filtering category
        if(selCat === 'All'){
          filterCat = response.data;
        }else{
          filterCat = response.data.filter(items => items.category_id == selCat);
        }
        //filtering text
        if(searchText ===  null || searchText === ""){
          filterText = filterCat;
        }else{
          filterText = filterCat.filter(items => (items.name.toLowerCase()).includes(searchText.toLowerCase()));
        }

        setProd(filterText);

    
        
      });
    
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function setData(){
      await setProducts()
    }
    setData();
    
  }
  , [searching])


  //Item Control Section
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

  function addProduct(event) {

    addItemToCart({ 
      name: event.target.getAttribute('name'), 
      price: event.target.getAttribute('price'), 
      amount: 1 });
  }
  /////////////////////////////

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

          <div className="productsContainer mt-2 container-selected-products">
            
              {
                prod?
                prod.map((opt, key) => 
                <div className="card" key={key} style={{ width: "15rem" }}>
                <img src="..." className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{opt.name}</h5>
                  <p className="card-text">{opt.description}</p>
                  <p className="card-text">Category Id: {opt.category_id}</p>
                  <div className="cotainer amount-product aling-middle">
                    <div className="container-xxl text-start">
                      <p>Price: {opt.price}</p>
                    </div>
                  </div>
                  <div className="container text-center mt-2">
                    <button href="#" className="btn btn-primary" onClick={addProduct} name={opt.name} price={opt.price}>Add to cart</button>
                  </div>

              </div></div>):<div>Searching Products</div>
              }
            
          </div>
        </div>

      </div>
    </>
  )
}