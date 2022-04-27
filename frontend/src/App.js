import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"; 
import User from "./Components/User";
import Home from "./Components/Home";
import MenuItem from './Components/MenuItem';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className='App'>
      {/* <ChakraProvider>
    <MenuItem />
  </ChakraProvider> */}
    <Routes>
      <Route path='/' element={<User />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
