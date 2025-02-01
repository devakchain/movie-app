import React from "react";
import VodItem from "./VodItem";

function VodList(props) {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <h1>List of Tv shows:</h1>
        <div className="row">
          {props.arr.map((item) => {
            return <VodItem key={item.imdbID} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default VodList;
