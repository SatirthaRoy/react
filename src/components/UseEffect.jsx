import { useEffect, useState } from "react";



function UseEffect () {
  let [count,setCount] = useState(0);
  let [toogle,setToogle] = useState(false);
  const fuckCount = () => {
    setCount(count+=1);
  }
  useEffect(()=>{
     document.title = toogle ? "fuck you" : "fuck you more";
     console.log(count);
    }, [toogle, count]);
    
  return <div>
    {count}
    <button onClick={fuckCount}>+</button>
    <button onClick={()=> setToogle(!toogle)}>Fuck toogle</button>
  </div>
}

export default UseEffect;