/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import _debounce from "lodash/debounce";
import useDebounce from "../../hooks/useDebounce";
import LoadingSkeleton from "../loading/LoadingSkeleton";

// https://api.themoviedb.org/3/movie/550?api_key=3332bc13dad68cbfab335df51f189ae8
// https://api.themoviedb.org/3/search/movie?api_key=3332bc13dad68cbfab335df51f189ae8&query=""
// https://api.themoviedb.org/3/search/movie?api_key=64d7591ff89f1cf297796e97056fbccb&query=""
// 'https://api.themoviedb.org/3/search/movie?query=""&api_key=64d7591ff89f1cf297796e97056fbccb'

const urlAPI = `https://api.themoviedb.org/3/search/movie?api_key=3332bc13dad68cbfab335df51f189ae8&query="s"`;
const MovieSearch = () => {
  const [query, setQuery] = useState("w");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const queryDebounce = useDebounce(query, 500);
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=3332bc13dad68cbfab335df51f189ae8&query=${queryDebounce}`
      );
      const data = response.data.results;
      if (data) {
        setMovies(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log("Error: ", e);
    }
  };

  // const handleSearch = _debounce((e) => {
  //   e.target.value
  //     ? setQuery(e.target.value)
  //     : setQuery("w");
  // }, 500);

  const handleSearch = (e) => {
    e.target.value ? setQuery(e.target.value) : setQuery("w");
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryDebounce]);

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          type="text"
          className="w-full p-5 rounded-lg border-2 border-blue-200 shadow-[0px_0px_0px_3px_rgba(115,191,249,0.2)] bg-white"
          placeholder="Search movie..."
          onChange={handleSearch}
        />
      </div>
      {loading && (
        <div className="grid grid-cols-3 gap-10">
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
        </div>
      )}
      <div className="grid grid-cols-3 gap-10">
        {movies.length > 0 &&
          !loading &&
          movies.map((item, index) => (
            <MovieItem key={item.id} data={item}></MovieItem>
          ))}
      </div>
    </div>
  );
};

const MovieItem = ({ data }) => {
  return (
    <div className=" max-h-[600px] min-h-[536px] rounded-2xl shadow-sm bg-white flex flex-col cursor-pointer">
      <div className="p-3 h-[297px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt=""
          className="rounded-[6px] object-cover w-full h-full"
        />
      </div>
      <div className="p-8 flex flex-col gap-4 flex-1 text-2xl">
        <h2 className=" font-semibold">{data.title}</h2>
        <p className="text-[#999] text-[14px] line-clamp-4">{data.overview}</p>
        <div className="flex mt-auto gap-2 items-center">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-[#333] font-semibold text-[14px]">
            {data.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

const MovieItemLoading = () => {
  return (
    <div className=" max-h-[600px] rounded-2xl shadow-sm bg-white flex flex-col cursor-pointer">
      <div className="p-3 h-[297px]">
        <LoadingSkeleton width="100%" height="100%"></LoadingSkeleton>
      </div>
      <div className="p-8 flex flex-col gap-8 flex-1 text-2xl">
        <h2 className=" font-semibold">
          <LoadingSkeleton width="100%" height="24px"></LoadingSkeleton>
        </h2>
        <div>
          <LoadingSkeleton width="100%" height="10px"></LoadingSkeleton>
          <div className="h-5"></div>
          <LoadingSkeleton width="100%" height="10px"></LoadingSkeleton>
          <div className="h-5"></div>
          <LoadingSkeleton width="100%" height="10px"></LoadingSkeleton>
          <div className="h-5"></div>
          <LoadingSkeleton width="100%" height="10px"></LoadingSkeleton>
        </div>
        <div className="flex mt-auto gap-2 items-center">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-[#333] font-semibold text-[14px]">
            <LoadingSkeleton width="60px" height="12px"></LoadingSkeleton>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
