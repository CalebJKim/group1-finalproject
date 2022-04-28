import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"; 
import User from "./Components/User";
import Home from "./Components/Home";
import MenuItem from './Components/MenuItem';
import { ChakraProvider } from '@chakra-ui/react';
import Menu from './Routes/Menu';
import Crossroads from './Routes/crossroads';
import Cafethree from './Routes/Cafethree';
import Clarkkerr from './Routes/Clarkkerr';
import Foothill from './Routes/Foothill';

function App() {
  return (
    <div className='App'>
  {/* <ChakraProvider>
    <Menu />
  </ChakraProvider> */}
    <Routes>
      <Route path='/' element={<User />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cafe3' element={<ChakraProvider> <Cafethree /> </ChakraProvider>} />
      <Route path='/clarkkerr' element={<ChakraProvider> <Clarkkerr /> </ChakraProvider>} />
      <Route path='/crossroads' element={<ChakraProvider> <Crossroads /> </ChakraProvider>} />
      <Route path='/foothill' element={<ChakraProvider> <Foothill /> </ChakraProvider>} />
    </Routes>
    </div>
  );
}

export default App;
