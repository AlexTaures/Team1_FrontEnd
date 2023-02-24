import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { DataContext } from '../../context/DataContext';
import routes from '../../connection/BackendRoutes.json';

export default function FetchData() {

  const { setDashCustomers, setDashSales, setDashBrands, setDashPres, setDashPro, setDashAdmin } = useContext(DataContext);

  const fetchData = async () => {
    try {
      await axios.get(routes['customers'])
      .then(response => {
        setDashCustomers(response.data);
      });

    } catch (error) {
      console.log(error);
    }

    try {
      await axios.get(routes['sales'])
      .then(response => {
        setDashSales(response.data);
      });

    } catch (error) {
      console.log(error);
    }

    try {
      await axios.get(routes['brands'])
      .then(response => {
        setDashBrands(response.data);
      });

    } catch (error) {
      console.log(error);
    }

    try {
      await axios.get(routes['presentations'])
      .then(response => {
        setDashPres(response.data);
      });

    } catch (error) {
      console.log(error);
    }

    try {
      await axios.get(routes['products'])
      .then(response => {
        setDashPro(response.data);
      });

    } catch (error) {
      console.log(error);
    }

    try {
      await axios.get(routes['admins'])
      .then(response => {
        setDashAdmin(response.data);
      });

    } catch (error) {
      console.log(error);
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
