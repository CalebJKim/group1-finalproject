import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"; 
import User from "./Components/User";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<User />} />
    </Routes>
  );
}

export default App;
