import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black', padding: '1rem', margin: '1.5rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.5rem', textShadow: '0 0 10px #ccc', textShadowColor: 'black', textShadowBlur: '10px', textShadowOffsetX: '10px', textShadowOffsetY: '10px', textShadowSpread: '10px' }}>
        no cocktail matched your search
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className='section-title' style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black', padding: '1rem', margin: '1rem' }}>cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(
          (cocktail) => {
            console.log(cocktail);
            return <Cocktail key={cocktail.id} {...cocktail} />
          }
        )}
      </div>
    </section>
  )
}

export default CocktailList
