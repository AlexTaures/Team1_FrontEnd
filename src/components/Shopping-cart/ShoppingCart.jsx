import axios from 'axios';
import React, { useState, useRef, useEffect, useContext } from 'react';
import "../../styles/shoppincart.css";
import routes from "../../connection/BackendRoutes.json";
import { DataContext } from '../../context/Datacontext';
import { Link, Navigate } from 'react-router-dom';


export default function ShoppingCart() {
  const refAmount = useRef(null);
  const [prod, setProd] = useState(null);
  const { searchText, selCat, searching, login} = useContext(DataContext);
  const { cart, setCart } = useContext(DataContext);
  const [showSidebar, setShowSidebar] = useState(false);
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
//////end getting data ///////////////





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
      id: event.target.getAttribute('id'),
      name: event.target.getAttribute('name'), 
      price: event.target.getAttribute('price'), 
      img_url: event.target.getAttribute('img_url'),
      stock: event.target.getAttribute('stock'),
      amount: 1 });
  }
  /////////////////////////////
  const toggleSidebar = (event) => {
    event.preventDefault();
    showSidebar? setShowSidebar(false):setShowSidebar(true);
  }

  
      return (
        sessionStorage.length === 0 && login === 0? <Navigate to="/account" replace={true}/>:
        <>
          <div className="cartMainContainer mt-4 text-center">
            
            
            <div className="container d-flex relative">
            <div className="container-products-available mt-3 text-start">
              <h2>Products available</h2>

              <div className="productContainer mt-2 container-selected-products">
                
                  {
                    prod?
                    prod.map((opt, key) => 
                    <div className="card" key={key} style={{ width: "15rem" }}>
                    <img src={opt.img_url} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{opt.name}</h5>
                      <p className="card-text">{opt.description}</p>
                      <div className="cotainer amount-product aling-middle">
                        <div className="container-xxl text-start">
                          <p>Price: ${parseFloat(opt.price).toFixed(2)}</p>
                        </div>
                        <div className="container-xxl text-start">
                          <p>Stock: {opt.amount}</p>
                        </div>
                      </div>
                      <div className="container text-center mt-2">
                        {
                          opt.amount>0?
                          <button className="btn btn-primary" onClick={addProduct} id={opt.id} name={opt.name} price={opt.price} img_url={opt.img_url} stock={opt.amount}>Add to cart</button>:
                          <button className="btn btn-danger disabled" onClick={addProduct} id={opt.id} name={opt.name} price={opt.price} img_url={opt.img_url}>No stock</button>
                        }
                      </div>

                  </div></div>):<div>Searching Products</div>
                  }
                
              </div>
            </div>
            
            </div>

            
          {
            showSidebar && login == 2?
            <div className="cartContainer">
              <button className='closeButton' onClick={toggleSidebar}>Close</button>
              <button className='payButton'><Link to="/paycart" className='link'>PayCart</Link></button>
              <div className="totalContainer d-flex text-end">
                <div className="totalProducts d-flex">Total products: <p>{cart.items.length}</p></div>
                <div className="totalPay d-flex">Total to pay: <p>${(cart.total).toFixed(2)}</p></div>
              </div>
              <div className="container text-start mt-3">
                <h3 className='text-end'>Selected products</h3>

                <div className="scroll-bg">
                  <div className="scroll-div">
                    <div className="scroll-object">
                    <div className="container mt-2 container-selected-products" id="selectedProducts">
                    {cart.items.map((item, index) => (
                        <div className="card" style={{ width: "15rem" }} key={index}>
                          <div className="card-body">
                            
                            <img src={item.img_url} alt='image not found' className="card-img-top" />
                            <h5 className="card-title ml-3 text-start">{item.name}</h5>
                            <p className="card-text">{item.description}.</p>
                            <div className="cotainer amount-product aling-middle">
                              <div className="container-xxl text-start">
                                <p>Amount: <input className="col-xl-4" type="number" min="1" max={item.stock} defaultValue={item.amount} onChange={(event) => updateItemQuantity(index, event.target.value)} ref={refAmount} /></p>
                                <p>Price: ${parseFloat(item.price).toFixed(2)}</p>
                              </div>
                            </div>
                            <div className="container text-center mt-2">
                              <button href="#" className="btn btn-primary" onClick={() => removeItemFromCart(index)}>Remove to cart</button>
                            </div>

                          </div>
                        </div>
                    ))}
                    </div>
                    </div>
                  </div>
                  </div>
              </div>
              
              </div>:<button className='toggleButton' onClick={toggleSidebar}>
                {
                  login== 0? "Login First":
                  login == 2? "Shopping Cart":"Admin View"
                }
                </button>
          }  
          </div>
        </>
      )
      
}
