/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useGallery } from "../../contexts/gallery-context";
import PropTypes from "prop-types";

const PhotoList = () => {
  const { photos, cartItems } = useGallery();
  console.log(cartItems)
  return (
    <div className="px-10 py-10">
      <div className="grid grid-cols-4 gap-10">
        {photos.length > 0 &&
          photos.map((photo) => (
            <PhotoItem key={photo.id} info={photo}></PhotoItem>
          ))}
      </div>
    </div>
  );
};

const PhotoItem = ({ info: { id, url, isFavorite } }) => {
  const { toggleFavorite, addToCart } = useGallery();
  const itemInfo = { id, url, isFavorite };
  return (
    <div className="relative h-[300px] group rounded-lg overflow-hidden">
      <img src={url} alt="" className="w-full h-full object-cover" />
      <span
        className="absolute top-4 right-6 cursor-pointer max-w-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all group-hover:-translate-y-2"
        onClick={() => toggleFavorite(id)}
      >
        {isFavorite ? (
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16663 17.5C4.16611 14.4798 5.37993 11.5863 7.53499 9.47045C9.69005 7.35458 12.6053 6.19405 15.625 6.24998C19.2027 6.23098 22.6166 7.74826 25 10.4166C27.3833 7.74826 30.7972 6.23098 34.375 6.24998C37.3946 6.19405 40.3099 7.35458 42.4649 9.47045C44.62 11.5863 45.8338 14.4798 45.8333 17.5C45.8333 28.6583 32.5437 37.0833 25 43.75C17.4729 37.0271 4.16663 28.6666 4.16663 17.5Z"
              fill="#FC2872"
            />
          </svg>
        ) : (
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 43.7499C23.6563 42.5582 22.1375 41.3186 20.5313 39.9999H20.5104C14.8542 35.3749 8.44376 30.1416 5.61251 23.8707C4.68234 21.8743 4.18939 19.7022 4.16665 17.4999C4.16044 14.478 5.37245 11.5811 7.52877 9.464C9.6851 7.34688 12.6037 6.18822 15.625 6.2499C18.0847 6.25379 20.4913 6.96465 22.5583 8.29782C23.4666 8.88734 24.2884 9.60043 25 10.4166C25.7156 9.60364 26.5376 8.89096 27.4438 8.29782C29.5099 6.96439 31.916 6.25348 34.375 6.2499C37.3963 6.18822 40.3149 7.34688 42.4712 9.464C44.6276 11.5811 45.8396 14.478 45.8334 17.4999C45.8121 19.7058 45.3191 21.8816 44.3875 23.8812C41.5563 30.152 35.1479 35.3832 29.4917 39.9999L29.4708 40.0166C27.8625 41.327 26.3458 42.5666 25.0021 43.7666L25 43.7499ZM15.625 10.4166C13.6844 10.3923 11.8127 11.135 10.4167 12.4832C9.07164 13.8044 8.31991 15.6146 8.33316 17.4999C8.35694 19.1051 8.72048 20.6871 9.40001 22.1416C10.7365 24.8472 12.5398 27.2958 14.7271 29.3749C16.7917 31.4582 19.1667 33.4749 21.2208 35.1707C21.7896 35.6395 22.3688 36.1124 22.9479 36.5853L23.3125 36.8832C23.8688 37.3374 24.4438 37.8082 25 38.2707L25.0271 38.2457L25.0396 38.2353H25.0521L25.0708 38.2207H25.0813H25.0917L25.1292 38.1895L25.2146 38.1207L25.2292 38.1082L25.2521 38.0916H25.2646L25.2833 38.0749L26.6667 36.9395L27.0292 36.6416C27.6146 36.1645 28.1938 35.6916 28.7625 35.2228C30.8167 33.527 33.1938 31.5124 35.2583 29.4187C37.4459 27.3407 39.2493 24.8926 40.5854 22.1874C41.2772 20.7203 41.646 19.1218 41.6668 17.4999C41.6754 15.6204 40.924 13.8172 39.5833 12.4999C38.19 11.1456 36.318 10.3967 34.375 10.4166C32.004 10.3964 29.7374 11.3903 28.1458 13.1478L25 16.7728L21.8542 13.1478C20.2626 11.3903 17.996 10.3964 15.625 10.4166Z"
              fill="white"
            />
          </svg>
        )}
      </span>
      <button
        className="py-3 px-6 rounded-lg text-[14px] text-center font-semibold absolute bg-white bottom-5 left-2/4 -translate-x-2/4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2 transition-all"
        onClick={() => addToCart(itemInfo)}
      >
        Add to cart
      </button>
    </div>
  );
};

PhotoItem.propTypes = {
  url: PropTypes.string,
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
};

export default PhotoList;
