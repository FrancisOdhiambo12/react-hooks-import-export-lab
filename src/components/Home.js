import React from "react";
import {username, city, image} from "../data/user"

// let username = "Liza"
// let city = "New York"

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
  

export default Home