import React from "react";
import JokesNorris from "../components/JokesNorris";
import Header from "../components/Header";



const Norris = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="user-list-page">
        <h2>
          Chuck Norris Jokes  
        </h2>
      </div>
      <div id="joke">
        <JokesNorris />
        <JokesNorris />
        <JokesNorris />
        <JokesNorris />
        <JokesNorris />
        <JokesNorris />
        <JokesNorris />
        <JokesNorris />
        <JokesNorris />
        <JokesNorris />
        <JokesNorris /> 
      </div>
      
      

    </div>
  );
};

export default Norris;
