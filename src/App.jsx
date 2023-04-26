import "./App.css";
import React from "react";
import { TweetsPage } from "./pages/tweetsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="tweets" element={<TweetsPage />} />
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
