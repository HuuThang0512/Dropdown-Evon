/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
// import { useLocalStorage } from "usehooks";

const GalleryContext = createContext();
const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1720170494675-e2dcd6de34a7?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://plus.unsplash.com/premium_photo-1719850361252-aa68c265b85a?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1715528599141-03d04e5daba9?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: false,
  },
  {
    id: 4,
    url: "https://plus.unsplash.com/premium_photo-1720020552749-a103c0157ff3?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: false,
  },
  {
    id: 5,
    url: "https://plus.unsplash.com/premium_photo-1719850361252-aa68c265b85a?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: false,
  },
  {
    id: 6,
    url: "https://plus.unsplash.com/premium_photo-1673491311340-d3c937101a51?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: false,
  },
  {
    id: 7,
    url: "https://plus.unsplash.com/premium_photo-1720020552749-a103c0157ff3?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: false,
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1541536753963-e86e2d2ad92f?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: false,
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: false,
  },
];

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { storedValue, setValue };
}

function GalleryProvider(props) {
  const { storedValue: storedPhotos, setValue: setStoredPhotos } =
    useLocalStorage("photos", fakeData);
  const { storedValue: storedCart, setValue: setStoredCart } =
    useLocalStorage("cartItems", []);
  const [photos, setPhotos] = useState(storedPhotos);
  const [cartItems, setCartItems] = useState(storedCart);
  const [favoriteList, setFavoriteList] = useState([]);
  const toggleFavorite = (photoId) => {
    const updateArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setStoredPhotos(updateArray)
    setPhotos(updateArray);
    const inCart = cartItems.some((item) => item.id === photoId);
    let cartUpdated = [...cartItems];
    if (inCart) {
      cartUpdated = cartItems.map((item) => {
        if (item.id == photoId) {
          return { ...item, isFavorite: !item.isFavorite };
        }
        return item;
      });
    }
    updateCart(cartUpdated);
  };
  const updateCart = (newCart) => {
    setCartItems(newCart);
    setStoredCart(newCart);
  };
  const addToCart = (newItem) => {
    const isExisted = cartItems.some((item) => item.id === newItem.id);
    if (!isExisted) {
      setCartItems((cartItems) => [...cartItems, newItem]);
      setStoredCart((cartItems) => [...cartItems, newItem]);

    }
  };
  const value = {
    photos,
    setPhotos,
    cartItems,
    setCartItems,
    favoriteList,
    setFavoriteList,
    toggleFavorite,
    addToCart,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("Must use in GalleryProvider");
  return context;
}

export { GalleryProvider, useGallery };
