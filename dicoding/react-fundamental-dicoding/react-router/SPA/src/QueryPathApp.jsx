import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UpcomingPage from "./pages/UpcomingPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import Navigation from "./components/Navigation";
import DetailPageWrapper from "./pages/DetailPage";
import SearchPageWrapper from "./pages/SearchPage";

function QueryPathApp() {
  return (
    <>
      <header>
        <h1>Movie Catalogue</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/now-playing" element={<NowPlayingPage/>} />
          <Route path="/upcoming" element={<UpcomingPage/>} />
          <Route path="/search" element={<SearchPageWrapper/>} />
          <Route path="/movies/:id" element={<DetailPageWrapper />} />
        </Routes>
      </main>
    </>
  );
}

export default QueryPathApp;