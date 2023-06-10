import React from "react";
import "./backgroundVideo.scss";

const BackgroundVideo = () => {
    return (
      <div className="background_video">
        <div className="bgVideo">
        <video className="video" autoPlay loop muted>
          <source src={process.env.PUBLIC_URL + "/video/video.mp4"} type="video/mp4" />
        </video>
        </div>
      </div>
    );
  };
  
  export default BackgroundVideo;