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
      
      <JokesNorris />
    </div>
  );
};

export default Norris;
