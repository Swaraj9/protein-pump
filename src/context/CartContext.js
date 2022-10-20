import React, { createContext, useContext, useState } from 'react'

const cartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        let tempItemList = [...items];
        let itemInItems = false;
        for(let i = 0; i < tempItemList.length; i++){
            if(tempItemList[i].name === item.name){
                tempItemList[i].amount++;
                itemInItems = true;
            }
        }

        if(itemInItems){
            setItems(tempItemList);
        }else{
            setItems([...items, {name: item.name, value: item.value, amount: 1, priceLink: item.priceLink}]);
        }
    }

    const removeItem = (item) => {
        if(items.includes(item)){
            let tempItemList = [...items];
            for(let i = 0; i < items.length; i++){
                if(tempItemList[i].name === item.name){
                    if(tempItemList[i].amount > 1){
                        tempItemList[i].amount--;
                    }else{
                        tempItemList = tempItemList.splice(tempItemList.indexOf(item), 1);
                    }
                }
            }
            setItems(tempItemList);
        }
    }

    const clearItems = () => {
        setItems([]);
    }

    return(
        <cartContext.Provider value={{items, addItem, removeItem, clearItems}}>{children}</cartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(cartContext);
}

