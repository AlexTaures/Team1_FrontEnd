import React, { createContext, useState } from 'react';



export const DataContext = createContext();




export const DataProvider =  ( {children} ) => {
    //test information
    let categoriesList = ["Floor", "Garden", "Toilet"];
    //-----
    const [categories, setCategories] = useState(categoriesList);
    


      //console.log(data);
    return (
        <DataContext.Provider value={{
            categories, setCategories
        }} >
            { children }
        </DataContext.Provider>
    )
}