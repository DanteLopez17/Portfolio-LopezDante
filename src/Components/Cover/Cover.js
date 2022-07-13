import React from "react";
import "./Cover.css";
import coding from "../../media/coding.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coding} autoPlay loop muted />
      <h1>López Dante</h1>
      <p>Developer | Designer</p>
    </div>
  );
};

export default Cover;