/* eslint-disable no-unused-vars */
import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar}
          title={item.title}
          author={item.author}
          className={index == 1 ? "Item1" : ""}
        ></YoutubeItem>
      ))}
    </div>
  );
};

export default YoutubeList;
