import React from "react";
import "./App.css";
import Create from "./API/Create";
import Read from "./API/Read";
import Update from "./API/Update";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Create/>}></Route>
        <Route path="/Create" element={<Create />}></Route>
        <Route path="/Update" element={<Update />}></Route>
        <Route path="/Read" element={<Read />}></Route>
      </Routes>

    </div>
  );
}

export default App;