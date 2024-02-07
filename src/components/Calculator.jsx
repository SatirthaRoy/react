import { useState } from "react";
import simpleCodes from 'simple-codes';

function Keys () {
  let [result, setResult] = useState('0');
  // lets only valid expression enter
  function resultSet (s) {
    if(result[0] === '0' && s !== '.') {
      if(result[1] !== '.') {
        setResult(result = '');
      }
      
    }

    if(isNaN(Number(result[result.length-1]))) {
      if(!isNaN(s)) {
        setResult(result += s);
      }
    } else {
      setResult(result += s);
    }
    
    if(result.length === 0) {
      if(s === '-' || !isNaN(s)) {
        setResult(result += s);
      }
    }
    console.log(result);
  }

  function backspace () {
    let a = result.split('');
    a.pop();
    setResult(a.join(''));
  }
  
  let back = '<';
  return <div className="calculator">
     <div className="screen">{result}</div>
    <div className="key">
    <button className="clear" onClick={()=> setResult('0')}>C</button>
    <button className="back" onClick={backspace}>{back}</button>
    <button onClick={()=> resultSet(7)}>7</button>
    <button onClick={()=> resultSet(8)}>8</button>
    <button onClick={()=> resultSet(9)}>9</button>
    <button onClick={()=> resultSet('/')} className="op">/</button>
    <button onClick={()=> resultSet(4)}>4</button>
    <button onClick={()=> resultSet(5)}>5</button>
    <button onClick={()=> resultSet(6)}>6</button>
    <button onClick={()=> resultSet('*')} className="op">x</button>
    <button onClick={()=> resultSet(1)}>1</button>
    <button onClick={()=> resultSet(2)}>2</button>
    <button onClick={()=> resultSet(3)}>3</button>
    <button onClick={()=> resultSet('-')} className="op">-</button>
    <button className="zero" onClick={()=> resultSet(0)}>0</button>
    <button onClick={()=> resultSet('.')}>.</button>
    <button onClick={()=> resultSet('+')} className="op">+</button>
    <button className="equal" onClick={()=> setResult(() => {
      console.log(simpleCodes.calculate(result));
      return Number.isInteger(Number(simpleCodes.calculate(result))) ? simpleCodes.calculate(result) : Number(simpleCodes.calculate(result)).toFixed(2);
      })}>=</button>
  </div>  
  </div> 

}


function Calculator () {
  return <div className="claculator">
    <Keys/>
  </div>
}


export default Calculator;