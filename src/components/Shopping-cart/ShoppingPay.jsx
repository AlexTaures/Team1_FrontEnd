import React, { useContext } from 'react'
import { DataContext } from '../../context/Datacontext'

export default function ShoppingPay() {
  let total = 0;
  const { cart } = useContext(DataContext)

  if(cart.items.length>0){
    cart.items.forEach(element => {
      total += element.amount*element.price;
    });
  }
  return (
    <div className="generalContainer">
      <div className="subContainer"></div>
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
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td>${item.amount*item.price}</td>
              </tr>
            ))
          }
          <td>Total</td> <td></td> <td></td> <td></td> <td>${total}</td>
        </tbody>
      </table>
    </div>
  )
}
