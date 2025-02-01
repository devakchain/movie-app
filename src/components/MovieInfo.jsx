import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function MovieInfo() {
  const params = useParams();
  const nav = useNavigate();
  const [item, setItem] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let url = `https://www.omdbapi.com/?i=${params["id"]}&apikey=3f17892a`;
    const res = await fetch(url);
    const data = await res.json();

    setItem(data);
  };

  return (
    <div className="container p-2 text-center shadow mt-5  movie-info">
      <img src={item.Poster} alt="" className="col-md-2" />
      <h2>{item.Title}</h2>
      <div>runtime: {item.Runtime}</div>
      <div>rating: {item.imdbRating}</div>
      <div>Genere: {item.Genre}</div>
      <div className="col-md-6 mx-auto">Plot: {item.Plot}</div>
      <button
        onClick={() => {
          nav(-1);
        }}
        className="btn btn-dark mt-3"
      >
        Back to list
      </button>
    </div>
  );
}

export default MovieInfo;
