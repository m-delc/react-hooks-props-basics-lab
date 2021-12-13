import React from "react";

function Home({ username, city, color }) {
  // const { username, city, color } = props
    console.log(color);
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
