import { createContext, useState } from "react";
import About from "./components/About";
import Homepage from "./components/Homepage";
import {Route, Routes, Link} from 'react-router-dom';

export const Log = createContext();

function App() {

  return (
    <>
      <ul>
        <li><Link to='/'>Homepage</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

    </>
  );
}

export default App;
