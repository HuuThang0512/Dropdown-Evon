/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./App.scss";
import { CountProvider, useCount } from "./contexts/countContext";
import { GalleryProvider } from "./contexts/gallery-context";
import Gallery from "./components/gallery/PhotoList";
import PhotoList from "./components/gallery/PhotoList";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import BlogPage from "./components/BlogPage";
import ProfilePage from "./components/ProfilePage";

const App = () => {
  return (
    <div className="">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<>Home Page</>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
      </Routes>
    </div>
  );
};

export default App;
