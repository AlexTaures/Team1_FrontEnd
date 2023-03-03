import React, { useContext } from 'react'
import { DataContext } from '../../context/Datacontext';

export default function ViewSalesDetail(props) {
  const { setDashOption } = useContext(DataContext);
  

  let firstSplit = [];
  let secondSplit = [];
  let list = [];
  let total = 0;
  props.detail.split("/").forEach(e => {
    firstSplit.push(e)
  });
  //console.log(firstSplit);
  firstSplit.pop();
  firstSplit.forEach((e, key)=> {
    secondSplit = e.split(",");
    if(key>0){
      secondSplit.shift();
    }
    
    list.push({
      "key": secondSplit[0],
      "name": secondSplit[1],
      "price": secondSplit[2],
      "amount": secondSplit[3],
      "total": secondSplit[4]
    })
    total += Math.floor(secondSplit[4]);
  });

  const comeBack = (event) => {
    event.preventDefault();
    setDashOption(12);
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
            list.map((opt, index) => (
              <tr key={index}>
                <td>{opt.key}</td>
                <td>{opt.name}</td>
                <td>${opt.price}</td>
                <td>{opt.amount}</td>
                <td>${opt.total}</td>
              </tr>
            ))
          }
          <td>Total</td> <td></td> <td></td> <td></td> <td>${total.toFixed(2)}</td>
        </tbody>
      </table>
      <button className='back' onClick={comeBack}>Back</button>
      </div>      
    </div>
  )
}
