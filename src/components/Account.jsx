import { useState, createContext } from "react";
import User from "./User";

export const data = createContext();
function Account() {
  let user = {name: 'a', pass: 'a'};
  let [logged,setLogged] = useState(false);
  let [info,setInfo] = useState({name: '', pass: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    (user.name === info.name && user.pass === info.pass) ? setLogged(true) : setLogged(false);
    setInfo({name: '', pass: ''});
  }
  return <div>
      <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="name">Name: <input type="text" onChange={(e)=> setInfo({...info, name: e.target.value})} value={info.name}/></label>
      <label htmlFor="name">Password: <input type="password" onChange={(e)=> setInfo({...info, pass: e.target.value})} value={info.pass}/></label>
      <br />
      <input type="submit" value="Log in" />
    </form>
    {logged?
    <data.Provider value={user}>
      <User/>
    </data.Provider> : 
    console.log('invalid')}

  </div>
  
}


export default Account;