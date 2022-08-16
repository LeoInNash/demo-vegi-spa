import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Checkout } from "./components";

function App() {
  return (
    <BrowserRouter basename="/react">
      <Routes>
        <Route path="/" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
