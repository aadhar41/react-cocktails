import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('assi');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async (term) => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${term}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
          return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDrinks(searchTerm);
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, searchTerm, setSearchTerm, cocktails, setCocktails, fetchDrinks }}>
      {children}
    </AppContext.Provider>
  );
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
