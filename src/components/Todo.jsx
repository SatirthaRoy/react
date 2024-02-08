import { useState } from "react";

function Todo() {
  let [list,SetList] = useState([]);
  let [value,setValue] = useState('');
  let [date,setDate] = useState();

  const Edit = ({editable,i,edited}) => {
    if(editable) {
      return <button className="edit" onClick={() => {
        SetList(list.map((item,index)=> {
          return index === i ? {...item, task: edited, editable: false} : item;
        }));
      }}>Save</button>
    } else {
      return <button className="edit" onClick={() => {
        SetList(list.map((item,index)=> {
          return index === i ? {...item,editable: true} : item;
        }));
      }}>Edit</button>
    }
  }

  const Task = ({item,i}) => {
    let [edited, setEdited] = useState(item.task);
    if(item.editable) {
      return <><input type="text" onChange={(e) => {
        setEdited(e.target.value);
      }} value={edited}/> <Edit editable={item.editable} i={i} edited={edited}/> </>
    } else {
      return <><span className="task">{item.task}</span><Edit editable={item.editable} i={i} edited={edited}/></>;
    }
  }


  const deleteItem = (i) => SetList(list.filter((item,index) => index !== i));

  const checkChange = (i) => SetList(list.map((item, index) => {
    if (i === index) {
      return {...item, checked: item.checked ? false: true}
    }
    return item;
  }));

  return <div className="list-container">
        {list.map((item,i)=> {
          return <li key={i} className="list">
                <div className="check"><input type="checkbox" onChange={()=> checkChange(i)}/></div>
                {item.checked ? <span className="task"><s>{item.task}</s></span> : <Task item = {item} i={i}/>}
              <span className="date">{item.due}</span>
              <button onClick={()=> deleteItem(i)} className="delete">Delete</button>
            </li>
        })}
        <div className="input-field">
          <input type="text" onChange={(e)=> setValue(e.target.value)} value={value} placeholder="Enter task"/>
          <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
          <button className="edit" onClick={()=> {
            SetList([...list, {task: value, due: date, checked: false, editable: false}]);
            setValue('');
            setDate('');
            }}>Add</button>
        </div>
    </div>
}

export default Todo;