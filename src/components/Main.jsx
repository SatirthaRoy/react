import { useState } from "react"

export default Main

function Main () {
  const [info, setInfo] = useState({});
  const handleChangeName = (e)=> setInfo({...info, name: e.target.value});
  const handleChangeSureName = (e)=> setInfo({...info, last: e.target.value});
  const handleChangeEmail = (e)=> setInfo({...info, email: e.target.value});

  // another info
  const [text, setText] = useState(null);

  const khanki = () => setText({...info});

  const Para = () => (text && (text.name && text.last && text.email)) && <p>{text.name}, {text.last}, ({text.email})</p>

  return <main>
    <h2>Main</h2>
      <label htmlFor="">First Name:
        <input type="text" onChange={handleChangeName} value={info.name}/>
      </label>
      <label htmlFor="">Last Name:
        <input type="text" onChange={handleChangeSureName} value={info.last}/>
      </label>
      <label htmlFor="">Email:
        <input type="text" onChange={handleChangeEmail} value={info.email}/>
      </label>
    <button onClick={khanki}>submit</button>
    <Para/>
  </main>
}