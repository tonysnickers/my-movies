import React from 'react'

const Search = ({setMovie, movie}) => {


  return (
    <div className="search-form">
      <h1>react Movie</h1>

        <input
        type="text"
        onChange={(e) => setMovie(e.target.value)}
        defaultValue={movie}
        />
        <input type="submit" />
    </div>
  )
}

export default Search
