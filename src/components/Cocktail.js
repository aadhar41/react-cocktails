import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, name, image, info, glass }) => {

  return (
    <>
      <article className="cocktail">
        <h2 className="cocktail-name" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black', padding: '1rem', margin: '1rem' }}>{name}</h2>
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="cocktail-footer">
          <h3 className="cocktail-info" >{info}</h3>
          <h4 className="cocktail-glass" >{glass}</h4>
          <p style={{ fontSize: '1rem', fontWeight: 'bold', margin: '2rem 0 1rem 0' }}>
            <Link to={`/cocktail/${id}`} className='btn btn-primary btn-block'>Read More</Link>
          </p>
        </div>
      </article>
    </>
  )
}

export default Cocktail
