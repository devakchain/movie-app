import React from "react";
import VodStrip from "../components/VodStrip";
import VodList from "../components/VodList";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [querys] = useSearchParams();
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const searchQ = querys.get("s") || "superman";
    doApi(searchQ);
  }, [querys]);

  const doApi = async (search) => {
    let url = `https://www.omdbapi.com/?s=${search}&apikey=3f17892a`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.Search);
    setArr(data.Search);
  };
  return (
    <div>
      <VodStrip />
      <VodList arr={arr} />
    </div>
  );
}

export default Home;
