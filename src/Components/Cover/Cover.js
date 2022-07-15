import React from "react";
import "./Cover.css";
import coding from "../../media/coding.mp4";
import Foto from "../../media/Foto.jpg";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coding} autoPlay loop muted />
      <img src={Foto} alt="DanteLopez"/>
      <h1>López Dante</h1>
      <p>Developer | Designer</p>
    </div>
  );
};

export default Cover;