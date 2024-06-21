import React from "react";
import "./MovieCard.css";
import Star from "../../assets/star.png";

function MovieCard({
  Link,
  Title,
  PosterImage,
  Description,
  ReleaseDate,
  Rating,
}) {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${Link}`}
      target="_blank"
      className="movie_card"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${PosterImage}`}
        alt="poster image"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{Title}</h3>
        <div className="align_center movie_date_rate ">
          <p>{ReleaseDate}</p>
          <p>
            {Rating} <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">{Description.slice(0, 100) + "..."}</p>
      </div>
    </a>
  );
}

export default MovieCard;
