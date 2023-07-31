import React,  { useState } from 'react';

 export const SearchResults = React.createContext({});


export  const SearchResultsProvider = ({ children }) => {
 
const [results , setResults] = useState([]);
const [cart, setCart] = useState({});


  return (
    <SearchResults.Provider value={{ results, setResults, setCart, cart }}>
      {children}
    </SearchResults.Provider>
  );
};

