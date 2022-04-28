import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"; 
import User from "./Components/User";
import Home from "./Components/Home";
import MenuItem from './Components/MenuItem';
import { ChakraProvider } from '@chakra-ui/react';
import Menu from './Routes/Menu';

function App() {
  return (
    <div className='App'>
  {/* <ChakraProvider>
    <Menu />
  </ChakraProvider> */}
    <Routes>
      <Route path='/' element={<User />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cafe3' element={<ChakraProvider> <Menu /> </ChakraProvider>} />
      <Route path='/clarkkerr' element={<ChakraProvider> <Menu /> </ChakraProvider>} />
      <Route path='/crossroads' element={<ChakraProvider> <Menu /> </ChakraProvider>} />
      <Route path='/foothill' element={<ChakraProvider> <Menu /> </ChakraProvider>} />
    </Routes>
    </div>
  );
}

export default App;
