import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { DataContext } from '../../context/Datacontext';
import routes from '../../connection/BackendRoutes.json';
/////testing import
import customers from '../../connection/testing/customers.json';
import brands from '../../connection/testing/brands.json';
import admins from '../../connection/testing/admins.json';
import categories from '../../connection/testing/categories.json';
import presentations from '../../connection/testing/presentations.json';
import products from '../../connection/testing/products.json';
import sales from '../../connection/testing/sales.json';

export default function FetchData() {

  const { setDashCustomers, setDashSales, setDashBrands, setDashPres, setDashPro, setDashAdmin, setDashCat, setDashOption, updating} = useContext(DataContext);

  const fetchData = async () => {
    let charging = 0;
    let routesLen = Object.keys(routes).length-1;
    setDashOption(0);

    ////for testing
    setDashCustomers(customers);
    setDashBrands(brands);
    setDashAdmin(admins);
    setDashCat(categories);
    setDashPres(presentations);
    setDashPro(products);
    setDashSales(sales);
    setDashOption(1);
    /////end testing
    /*
    try {
      await axios.get(routes['customers'])
      .then(response => {
        setDashCustomers(response.data);
        charging++;
      });

    } catch (error) {
      console.log(error);
    }

    try {
      await axios.get(routes['sales'])
      .then(response => {
        setDashSales(response.data);
        charging++;
      });

    } catch (error) {
      console.log(error);
    }

    try {
      await axios.get(routes['brands'])
      .then(response => {
        setDashBrands(response.data);
        charging++;
      });

    } catch (error) {
      console.log(error);
    }

    try {
      await axios.get(routes['presentations'])
      .then(response => {
        setDashPres(response.data);
        charging++;
      });

    } catch (error) {
      console.log(error);
    }

    try {
      await axios.get(routes['products'])
      .then(response => {
        setDashPro(response.data);
        charging++;
      });

    } catch (error) {
      console.log(error);
    }

    try {
      await axios.get(routes['admins'])
      .then(response => {
        setDashAdmin(response.data);
        charging++;
      });

    } catch (error) {
      console.log(error);
    }

    try {
      await axios.get(routes['categories'])
      .then(response => {
        setDashCat(response.data);
        charging++;
      });

    } catch (error) {
      console.log(error);
    }

    if(charging === routesLen){
      setDashOption(1);
    }
  */
  }


  useEffect(() => {
    async function setList(){
      await fetchData()
    }
    setList();
  }
  , [updating])
  return (
    <></>
  )
}
