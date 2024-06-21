import React from 'react'

function FilterMovies({onClickRating, minRating, ratings}) {
  return (
    <ul className="movie_filter align_center">
      {ratings.map( rate => <li className={minRating === rate?"movie_filter_item active":"movie_filter_item"} key={rate} onClick={()=>onClickRating(rate)}>{rate}+ Star</li>)}
    </ul>
    
  )
}

export default FilterMovies