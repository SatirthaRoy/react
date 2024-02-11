import { useEffect, useState } from "react";



function UseEffect () {
  let [users,setUsers] = useState([]);
  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(Response => Response.json())
    .then(data => {
      setUsers(data.results);
      console.log(data.results);
    })
    .catch(e => console.log(e));
  }

  useEffect(()=>fetchData(),[]);

  function ShowResult(){
    if(users.length > 0) {
      return <h1>Received</h1>
    } else {
      return <h1>fetching....</h1>
    }
  }

  function Cards() {
    return <div className="container">
      {users.map(user => {
        return <div className="card" key={user.cell}>
          <div className="pic">
            <img src={user.picture.large} alt="" />
          </div>
          <h3>{Object.values(user.name).join(' ')}</h3>
          <p>Address: {user.location.city},{user.location.country}</p>
          <p>Cell phone: {user.phone}</p>
          <p>Gender: {user.gender}</p>
          <label htmlFor="email">Email: <input type="email" value={user.email} readOnly/></label>
        </div>
      })}
    </div>
  }

  return <div>
    <ShowResult/>
    <Cards/>
  </div>
}

export default UseEffect;