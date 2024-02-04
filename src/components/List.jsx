import { useState } from "react";


function List () {
  const [list, setList] = useState(['apple', 'banana', 'jackfruit', 'lemon']);
  const [value, setValue] = useState('');

  return <div>
    <ol>
      {list.map((item,i) => <li key={i}>{item}</li>)}
    </ol>

    <input type="text" onChange={(e)=> {
      setValue(e.target.value);
    }} value={value}/>

    <button onClick={() => {
      setList([...list, value]);
      setValue('');
      }}>Add</button>
  </div>
}

export default List;