import React from "react";
import Links from "./Links"


function About({ links, bio }) {
  console.log(bio)
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      {bio ? <p>{bio}</p> : null}
      <Links github={links.github} linkedin={links.linkedin}/>
      
    </div>
  );
}

export default About;
