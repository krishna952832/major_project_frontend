import React from "react";
import "./Style.css";

const GithubButton = () => {
  return (
    // <div className="github-btn-container">
    <div className="github-button">
      <button
        className="button"
        onClick={() =>
          window.open("https://github.com/krishna952832", "_blank")
        }
      >
        <p className="title">Oranic Hub</p>
        <img src={require("../../Assets/likeemoji.png")} alt="like emoji" />
        <p className="description"></p>
      </button>
    </div>
    // </div>
  );
};

export default GithubButton;
