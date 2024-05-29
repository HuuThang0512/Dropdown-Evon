/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const getRandomPhotos = async (page) => {
  let linkImg = `https://picsum.photos/v2/list?page=${page}&limit=8`;
  try {
    const response = await axios.get(linkImg);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const handleLoadPhotos = useRef({});
  handleLoadPhotos.current = async () => {
    const images = await getRandomPhotos(page);
    setPhotos([...photos, ...images]);
    setPage(page + 1);
  };
  useEffect(() => {
    handleLoadPhotos.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {photos.length > 0 &&
          photos.map((item, index) => (
            <div className=" h-[240px]" key={index}>
              <img
                src={item.download_url}
                alt={item.author}
                className=" object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <div
          onClick={handleLoadPhotos.current}
          className=" px-6 py-3 bg-blue-300 inline-block rounded-lg cursor-pointer my-[40px] text-white font-bold"
        >
          Load more
        </div>
      </div>
    </div>
  );
};

export default Photo;
