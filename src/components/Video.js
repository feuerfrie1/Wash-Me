import React from "react";
import Cover from "./Cover";
import play from "../images/play_button.png";

function Video() {
  return (
    <div className="video">
      <Cover />
      <div className="video__play">
        <img className="video__play-button" src={play} alt="Кнопка play" />
        <p className="video__description">Нажмите, чтобы посмотреть</p>
      </div>
    </div>
  );
}

export default Video;