import React, { createContext, useState } from 'react';



export const DataContext = createContext();




export const DataProvider =  ( {children} ) => {
    //test information
    let categoriesList = ["Floor", "Garden", "Toilet"];
    let addressTest = "Generic User Address";
    let loginTest = 'Login';
    //-----
    const [categories, setCategories] = useState(categoriesList);
    const [userAddress, setUserAddress] = useState(addressTest);
    const [login, setLogin] = useState(loginTest);
    const [cart, setCart] = useState(0);
    


      //console.log(data);
    return (
        <DataContext.Provider value={{
            categories, setCategories,
            userAddress, setUserAddress,
            login, setLogin,
            cart, setCart
        }} >
            { children }
        </DataContext.Provider>
    )
}