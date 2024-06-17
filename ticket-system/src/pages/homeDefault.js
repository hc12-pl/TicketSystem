import React from "react";
import '../styles/index.css';
import '../styles/Navbar.css';
import Navbar from "../components/Navbar.js";

function HomeDefault() {
  return (
    <>
      <Navbar />
      <div id='loading'></div>
      </>
  );
}

export default HomeDefault;
