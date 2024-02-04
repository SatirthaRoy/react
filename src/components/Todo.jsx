import { useContext } from "react";
import { Log } from "../App";
import List from "./List";

function Todo() {
  const isLogged = useContext(Log);
  if(isLogged) {
    return <>
      <h3>logged in</h3>
      <List/>
    </>
    
  }
}

export default Todo;