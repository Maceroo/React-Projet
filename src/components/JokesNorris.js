import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const JokesNorris = () => {
  const [chuckJokes, setChuckJokes] = useState(null);
  const [search, setSearch] = useState("code");

  useEffect(() => {
    axios
      .get(
        `https://api.chucknorris.io/jokes/random`
      )
      .then((res) =>  setChuckJokes(res.data.value));
  }, [search]);

  return (
    <div className="form-component">
      <div className="result">
        {chuckJokes}
      </div>
    </div>
  );
};

export default JokesNorris;
