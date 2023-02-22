import React, { createContext, useState } from 'react';



export const DataContext = createContext();




export const DataProvider =  ( {children} ) => {
    //test information
    let categoriesList = ["Floor", "Garden", "Toilet"];
    let addressTest = "Generic User Address";
    //-----
    const [categories, setCategories] = useState(categoriesList);
    const [userAddress, setUserAddress] = useState(addressTest);
    const [login, setLogin] = useState(2);
    const [userName, setUserName] = useState('Log in');
    const [cart, setCart] = useState(0);
    


      //console.log(data);
    return (
        <DataContext.Provider value={{
            categories, setCategories,
            userAddress, setUserAddress,
            login, setLogin,
            cart, setCart,
            userName, setUserName
        }} >
            { children }
        </DataContext.Provider>
    )
}