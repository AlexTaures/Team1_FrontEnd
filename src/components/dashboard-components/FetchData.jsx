import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { DataContext } from '../../context/Datacontext';
import routes from '../../connection/BackendRoutes.json';

export default function FetchData() {

  const { setDashCustomers, setDashSales, setDashBrands, setDashPres, setDashPro, setDashAdmin, setDashCat, setDashOption } = useContext(DataContext);

  const fetchData = async () => {
    let charging = 0;
    let routesLen = Object.keys(routes).length;
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
  }



  useEffect(() => {
    async function setList(){
      await fetchData()
    }
    setList();
  }
  , [])
  return (
    <></>
  )
}
