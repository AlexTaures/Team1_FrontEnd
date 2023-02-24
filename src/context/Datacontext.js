import React, { createContext, useState } from 'react';



export const DataContext = createContext();




export const DataProvider =  ( {children} ) => {
    //test information
    let categoriesList = ["Floor", "Garden", "Toilet"];
    let addressTest = "Generic User Address";
    //-----
    const [categories, setCategories] = useState(categoriesList);
    const [userAddress, setUserAddress] = useState(addressTest);
    const [login, setLogin] = useState(0);
    const [userName, setUserName] = useState('Log in');
    const [cart, setCart] = useState(0);
    const [userInfo, setUserInfo] = useState({});
    const [dashOption, setDashOption] = useState(1);
    //for Dashboard Fetch Data
    const [dashCustomers, setDashCustomers] = useState([]);
    const [dashSales, setDashSales] = useState([]);
    const [dashBrands, setDashBrands] = useState([]);
    const [dashPres, setDashPres] = useState([]);
    const [dashProd, setDashPro] = useState([]);
    const [dashAdmin, setDashAdmin] = useState([]);
    const [dashCat, setDashCat] = useState([]);
    


      //console.log(data);
    return (
        <DataContext.Provider value={{
            categories, setCategories,
            userAddress, setUserAddress,
            login, setLogin,
            cart, setCart,
            userName, setUserName,
            userInfo, setUserInfo,
            dashOption, setDashOption,
            dashCustomers, setDashCustomers,
            dashSales,setDashSales,
            dashBrands,setDashBrands,
            dashPres,setDashPres,
            dashProd,setDashPro,
            dashAdmin,setDashAdmin,
            dashCat, setDashCat
        }} >
            { children }
        </DataContext.Provider>
    )
}