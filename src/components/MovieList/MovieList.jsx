import React, { useEffect, useState } from "react";
import _ from "lodash"


import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterMovies from "./FilterMovies";


function MovieList({type, title , emoji}) {
  const [moviesData, setMoviesData] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [sort, setSort] = useState({
    by:"default",
    order:"asc"
  })


 


  useEffect(() => {
    fetchMovies();
  }, [type]);

  useEffect(()=>{
    if(sort.by !== "default"){
      const sortedMovies = _.orderBy(moviesFiltered, [sort.by], [sort.order])
      setMoviesFiltered(sortedMovies)
    }
  },[sort])

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=e393edb1f78a07e150c2571126b77ab0`
      );
      const data = await response.json();
      setMoviesData(data["results"]);
      setMoviesFiltered(data["results"]);
    } catch (error) {
      console.log(error.message)
    }

  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setMoviesFiltered(moviesData);
    } else {
      setMinRating(rate);
      const filtered = moviesData.filter((movie) => movie.vote_average >= rate);
      setMoviesFiltered(filtered);
    }
  };

  const handleSort =(e) =>{
    const {name , value} = e.target
    setSort(prev => {
      return{...prev , [name]:value}
    })
  }

  return (
    <section className="movie_list" id={type}>
      <header className="movie_list_header align_center">
        <h2 className="movie_list_heading align_center">
          {title} <img src={emoji} alt={`${emoji} image`} className="navbar_emoji" />
        </h2>
        <div className="movie_list_fs align_center">
          <FilterMovies
            onClickRating={handleFilter}
            minRating={minRating}
            ratings={[8, 7, 6]}
          />

          <select name="by" id="" className="movie_sorting" onChange={handleSort} value={sort.by}>
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select name="order" id="" className="movie_sorting" onChange={handleSort} value={sort.order}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {moviesFiltered.map((movie) => (
          <MovieCard
            Link={movie.id}
            PosterImage={movie.poster_path}
            Title={movie.original_title}
            ReleaseDate={movie.release_date}
            Rating={movie.vote_average}
            Description={movie.overview}
            key={movie.id}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
