

function Fruits () {
  const fruits = ['apple', 'banana', 'jackfruit', 'mango', 'lichi', 'pineapple'];
  return <>
        <ul>{fruits.map((fruit, i)=> <li key={i}>{fruit}</li> )}</ul>
  </>
}

export default Fruits;