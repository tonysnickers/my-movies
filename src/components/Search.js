import React from 'react'

const Search = ({setMovie}) => {


  return (
    <div className="search-form">
      <h1>react Movie</h1>

        <input
        type="text"
        onChange={(e) => setMovie(e.target.value)}
        // defaultValue={setMovie}
        />
        <input type="submit" />
    </div>
  )
}

export default Search
