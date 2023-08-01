import React,  { useState } from 'react';

 export const SearchResults = React.createContext({});


export  const SearchResultsProvider = ({ children }) => {
 
const [results , setResults] = useState([]);
const [cart, setCart] = useState({});
const [carBuy, setCarBuy] = useState([]);


const addToCart = (product) => {

  const productInCartIndex = cart.findIndex(item => item.id === product.id);
  if (productInCartIndex >= 0) {
    const newCart = structuredClone(carBuy)
    newCart[productInCartIndex].quantity += 1;
    return setCarBuy(newCart);
} 
    // producto no esta 
    setCarBuy(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1,
      }
    ]))
}

const clearCar = () => {
  setCarBuy([])};
  



  return (
    <SearchResults.Provider value={{ results, setResults, setCart, cart , carBuy, addToCart, clearCar , setCarBuy }}>
      {children}
    </SearchResults.Provider>
  );
};

