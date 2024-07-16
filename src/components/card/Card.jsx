// eslint-disable-next-line no-unused-vars
import React from "react";

const Card = () => {
  return (
    <div className="relative relative rounded-lg w-[400px]">
      <img
        className="object-cover w-full rounded-lg aspect-square"
        src="https://cdn.dribbble.com/users/2400293/screenshots/16630840/media/ed6af0d38d460ff9ee426ad69e6435ea.png?resize=1600x1200&vertical=center"
        alt=""
      />
      <div className="absolute bg-white w-[calc(100%-36px)] -translate-x-2/4 -translate-y-2/4 left-2/4 p-5 rounded-lg flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <img
              className="object-cover rounded-full w-8"
              src="https://cdn.dribbble.com/users/2400293/screenshots/16630840/media/ed6af0d38d460ff9ee426ad69e6435ea.png?resize=1600x1200&vertical=center"
              alt=""
            />
            <span className="text-[#333]">@zndrson</span>
          </div>
          <div className="flex gap-3">
            <img src="./icon-heart.svg" alt="" />
            <div>256</div>
          </div>
        </div>
        <div className="bottom flex justify-between items-center">
          <h3 className=" font-medium text-[18px]">Cosmic Perspective</h3>
          <span className=" bg-grd-txt bg-clip-text text-clip text-transparent font-bold text-[18px]">
            12,000 PSL
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
