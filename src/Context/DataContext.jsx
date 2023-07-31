import React,  { useState } from 'react';

 export const SearchResults = React.createContext({});


export  const SearchResultsProvider = ({ children }) => {
 
const [results , setResults] = useState([]);

  return (
    <SearchResults.Provider value={{ results, setResults }}>
      {children}
    </SearchResults.Provider>
  );
};

