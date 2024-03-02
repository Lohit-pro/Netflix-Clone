import React, { useEffect, useState, useRef } from "react";
import "./Row.css";
import axios from "../axios";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const base_Url = "https://image.tmdb.org/t/p/original";

  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const request = await axios.get(props.fetchUrl + `&page=${page}`);
        setMovies(prevMovies => [...prevMovies, ...request.data.results]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    if (!loading) {
      fetchData();
    }
    
  }, [props.fetchUrl, page, loading]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (
      container.scrollTop + container.clientHeight >= container.scrollHeight * 0.8
    ) {
      if (!loading) {
        setPage(prevPage => prevPage + 1);
      }
    }
  };

  return (
    <div className="row">
      <div className="row__title">
        <h1>{props.title}</h1>
      </div>
      <div className="row__poster" ref={containerRef} onScroll={handleScroll}>
        {movies.map((movie, index) => (
          <>
          <img
            key={index}
            src={`${base_Url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.title}
            className={`row__${props.isLargeRow ? 'large' : 'small'}poster`}
          />
          {/* <div className="row__description">{console.log(movie.description)}</div> */}
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;
