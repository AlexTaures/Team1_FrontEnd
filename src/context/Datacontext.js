import React, { createContext, useState } from 'react';



export const DataContext = createContext();




export const DataProvider =  ( {children} ) => {
    //test information
    let categoriesList = ["Floor", "Garden", "Toilet"];
    let addressTest = "Generic User Address";
    //-----
    const [categories, setCategories] = useState(categoriesList);
    const [userAddress, setUserAddress] = useState(addressTest);
    


      //console.log(data);
    return (
        <DataContext.Provider value={{
            categories, setCategories,
            userAddress, setUserAddress
        }} >
            { children }
        </DataContext.Provider>
    )
}