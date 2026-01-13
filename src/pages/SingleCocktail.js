import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktail = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructions, strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15 } = item;
          return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass, instructions: strInstructions, category: strCategory, ingredients: [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15] };
        });
        setCocktail(newCocktail);
      } else {
        setCocktail([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCocktail();
  }, [id]);

  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2>no cocktail found</h2>
  }

  const { name, image, info, glass, instructions, category, ingredients } = cocktail[0];
  return (
    <>
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name} style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center', borderRadius: '0.5rem', margin: '1rem 0 1rem 0', padding: '1rem', border: '1px solid #ccc', boxShadow: '0 0 10px #ccc', boxShadowColor: 'black', boxShadowBlur: '10px', boxShadowOffsetX: '10px', boxShadowOffsetY: '10px', boxShadowSpread: '10px', boxShadowInset: 'inset' }}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructions :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleCocktail
