import React from 'react'
import { useGlobalContext } from '../context';
import { useEffect } from 'react';
const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const searchRef = React.useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchRef.current.value);
  }

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <>
      <section className="section search">
        <form action="" className='search-form' onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="search">search your favorite cocktail</label>
            <input type="text" name="search" placeholder='search' onChange={(e) => handleSubmit(e)} ref={searchRef} style={{ fontSize: '1rem', fontWeight: 'bold', margin: '1rem 0 1rem 0' }} />
            <button type="submit" className='btn btn-primary btn-block btn-lg'>search</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default SearchForm
