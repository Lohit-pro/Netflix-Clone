import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      const randomIndex = Math.floor(Math.random() * request.data.results.length);
      setMovie(request.data.results[randomIndex]);
      return request;
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <div className="banner__title">{movie?.title || movie?.name || movie?.original_name}</div>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          {truncate(
            movie?.overview,
            200
          )}
        </div>
      </div>
      <div className="banner--fadebottom"></div>
    </header>
  );
}

export default Banner;
