import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const TronaldDump = () => {
  const [tronaldDump, setTronaldDump] = useState(null);
  const [search, setSearch] = useState("code");

  useEffect(() => {
    axios
      .get(
        `https://www.tronalddump.io/random/quote`
      )
      .then((res) =>  setTronaldDump(res.data.value));
  }, [search]);

  return (
    <div className="form-component">
      <div className="result">
        {tronaldDump}
      </div>
    </div>
  );
};

export default TronaldDump;
