import { createContext, useState } from "react";
import Todo from "./components/Todo";

export const Log = createContext();

function App() {
  const credentials = {
    email: 'a',
    pass: 'a'
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);  

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


  function Logged () {
    return isLoggedIn ? <Log.Provider value = {isLoggedIn}>
      <Todo/>
    </Log.Provider> : <h3>wrong email or password</h3>
  }

  let [showLog, setShowLog] = useState(false);

  return (
    <>
    <h1>hellow</h1>
    <p>email: 'a' pass 'a'</p>
    <div>email: <input type="email" onChange={(e) => {
        setEmail(e.target.value);
      }} value={email}/>
    </div>
    <div>password: <input type="password" onChange={(e) => {
        setPass(e.target.value);
      }} value={pass}/>
    </div>
    {!isLoggedIn && <button onClick={() => {
      const info = {email: email, pass: pass};
      console.log(`info: ${info.email} ${info.pass}`);
      setIsLoggedIn((info.email === credentials.email && info.pass === credentials.pass));
      setEmail('');
      setPass('');
      setShowLog(true);
    }}>Log in</button>}
    
      {showLog && <Logged/>}
    </>
  );
}

export default App;
