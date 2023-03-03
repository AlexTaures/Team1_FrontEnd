import axios from 'axios';
import React, { useContext } from 'react';
import { DataContext } from '../../context/Datacontext';
import routes from "../../connection/BackendRoutes.json";
import { useNavigate } from 'react-router-dom'

export default function ShoppingPay() {
  const navigate = useNavigate();
  const { cart, setCart, userInfo } = useContext(DataContext);
  let productList = [];
  let total = 0;

  if(cart.items.length>0){
    cart.items.forEach(element => {
      total += element.amount*element.price;
    });
  }

  const payCart = async () => {
    cart.items.forEach((e, key)=> {
      productList.push(`${key+1},${e.name},${Math.floor(e.price).toFixed(2)},${e.amount},${Math.floor(e.amount*e.price).toFixed(2)}/`)
    });

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;

   try {
          
      const url = routes['sales'];
      const body = {
        "products": productList.toString(),
        "sale_date": currentDate,
        "total_sale": total,
        "customer_id": userInfo["id"]
      }
      
      await axios.post(url, body);
      setCart({items: [],total: 0});
      return (navigate("/shopping"));
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="generalContainer">
      <div className="subContainer">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.items.map((item, key) => (
              <tr key={key}>
                <td>{key+1}</td>
                <td>{item.name}</td>
                <td>${Math.floor(item.price).toFixed(2)}</td>
                <td>{item.amount}</td>
                <td>${Math.floor(item.amount*item.price).toFixed(2)}</td>
              </tr>
            ))
          }
          <td>Total</td> <td></td> <td></td> <td></td> <td>${total.toFixed(2)}</td>
        </tbody>
      </table>
      <button className='payButton px-3' onClick={payCart}>Pay Cart</button>
      </div>      
    </div>
  )
}
