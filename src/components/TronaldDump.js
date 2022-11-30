import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const TronaldDump = () => {
  const [tronaldDump, setTronaldDump] = useState(null);


  useEffect(() => {
    callapi()
    
  }, []);

  const callapi = () => {
    axios
      .get(
        `https://www.tronalddump.io/random/quote`
      )
      .then((res) =>  setTronaldDump(res.data.value)); 

  }

  return (
    <div onClick={()=>callapi()}>
      <boutonrefresh>refresh</boutonrefresh>

      <div className="form-component">
        
        <div className="result">
          {tronaldDump && 
            <h8>{tronaldDump}</h8>
          }
        </div>
      </div>
    </div>
  );
};

export default TronaldDump;
