import React,  { useState } from 'react';

 export const SearchResults = React.createContext({});


export  const SearchResultsProvider = ({ children }) => {
 
const [results , setResults] = useState([]);
const [cart, setCart] = useState({});
const [carBuy, setCarBuy] = useState([]);
const [favorite, setFavorite] = useState([]);

const clearCar = () => {
  setCarBuy([])};
  



  return (
    <SearchResults.Provider value={{ results, setResults, setCart, cart , carBuy, clearCar , setCarBuy , favorite, setFavorite}}>
      {children}
    </SearchResults.Provider>
  );
};

