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
    const [userInfo, setUserInfo] = useState({});
    const [dashOption, setDashOption] = useState(0);
    //for Dashboard Fetch Data
    const [dashCustomers, setDashCustomers] = useState([]);
    const [dashSales, setDashSales] = useState([]);
    const [dashBrands, setDashBrands] = useState([]);
    const [dashPres, setDashPres] = useState([]);
    const [dashProd, setDashPro] = useState([]);
    const [dashAdmin, setDashAdmin] = useState([]);
    const [dashCat, setDashCat] = useState([]);
    const [currentId, setCurrentId] = useState(null);
    const [updating, setUpdating] = useState(true);
    //For shopping cart
    const [searchText, setSearchText] = useState(null);
    const [selCat, setSelCat] = useState("All");
    const [searching, setSearching] = useState(true);
    const [cart, setCart] = useState({
        items: [],
        total: 0
      });
    const [detail, setDetail] = useState(null);

      //console.log(data);
    return (
        <DataContext.Provider value={{
            categories, setCategories,
            userAddress, setUserAddress,
            login, setLogin,
            userName, setUserName,
            userInfo, setUserInfo,
            dashOption, setDashOption,
            dashCustomers, setDashCustomers,
            dashSales,setDashSales,
            dashBrands,setDashBrands,
            dashPres,setDashPres,
            dashProd,setDashPro,
            dashAdmin,setDashAdmin,
            dashCat, setDashCat,
            currentId, setCurrentId,
            updating, setUpdating,
            searchText, setSearchText,
            selCat, setSelCat,
            searching, setSearching,
            cart, setCart,
            detail, setDetail
        }} >
            { children }
        </DataContext.Provider>
    )
}