import { createContext} from "react";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Calculator from "./components/Calculator";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Wallet from "./components/Wallet";
import {Route, Routes, Link} from 'react-router-dom';
import UseEffect from "./components/UseEffect";
import Account from "./components/Account";

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
        <li><Link to='/Account'>Account</Link></li>
        <li><Link to='/usereffect'>useEffect</Link></li>
        <li><Link to='/wallet'>Wallet</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/calc" element={<Calculator/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/usereffect" element={<UseEffect/>}/>
        <Route path="/wallet" element={<Wallet/>}/>
      </Routes>
      
    </>
  );
}

export default App;
