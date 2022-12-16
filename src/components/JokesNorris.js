import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const JokesNorris = () => {
  const [chuckJokes, setChuckJokes] = useState(null);


  useEffect(() => {
    callapi()
    
  }, []);

  const callapi =() => {
    axios
      .get(
        `https://api.chucknorris.io/jokes/random`
      )
      .then((res) =>  setChuckJokes(res.data.value));

  }

  return (    

    <div>
      <div onClick={()=>callapi()} class="card">
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <div className="form-component">
              <div className="result">
                {chuckJokes && 
                  <h8>{chuckJokes}</h8>
                }
              </div>
            </div>
          </blockquote>
        </div>
      </div>
      <div class="card center">
        AJOUTER AUX FAVORIS              
      </div>
    </div>


  );
};

export default JokesNorris;
