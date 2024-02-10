import { createContext} from "react";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Calculator from "./components/Calculator";
import Todo from "./components/Todo";
import Form from "./components/Form";
import {Route, Routes, Link} from 'react-router-dom';

export const Log = createContext();

function App() {
  return (
    <>
      <ul>
        <li><Link to='/'>Homepage</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/calc'>Calculator</Link></li>
        <li><Link to='/todo'>Todo</Link></li>
        <li><Link to='/form'>Form</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/calc" element={<Calculator/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>

    </>
  );
}

export default App;
