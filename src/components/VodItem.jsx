import React from "react";
import { useNavigate } from "react-router-dom";

function VodItem({ item }) {
  const nav = useNavigate();
  return (
    <div className="col-md-4  p-3">
      <div className="border p-2 h-100 overflow-hidden shadow">
        <img
          src={item.Poster}
          alt={item.Title}
          className="float-start me-2 w-25"
        />
        <h3>{item.Title}</h3>
        <div>Year: {item.Year}</div>
        <button
          onClick={() => {
            nav(`/info/${item.imdbID}`);
          }}
          className="btn btn-dark"
        >
          More info
        </button>
      </div>
    </div>
  );
}

export default VodItem;
