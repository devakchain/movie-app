import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function VodInput() {
  const inputRef = useRef();
  const nav = useNavigate();

  function onSeachKeyDown(e) {
    if (e.key == "Enter") {
      onSearch();
    }
  }

  function onSearch() {
    const search = inputRef.current.value;
    nav(`/?s=${search}`);
  }

  return (
    <header className="container-fluid bg-dark p-2">
      <div className="container">
        <div className="row">
          <div className="logo col-auto">
            <h2 className="text-white">My Vod</h2>
          </div>
          <nav className="d-flex col-md-4">
            <input
              onKeyDown={onSeachKeyDown}
              ref={inputRef}
              type="text"
              className="form-control"
              placeholder="search..."
            />
            <button onClick={onSearch} className="btn btn-warning">
              Search
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default VodInput;
