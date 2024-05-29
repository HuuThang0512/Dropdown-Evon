/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-infor">
          <h3 className="youtube-title">{props.title || "No Title"}</h3>
          <h4 className="youtube-author">{props.author || "No author"}</h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
