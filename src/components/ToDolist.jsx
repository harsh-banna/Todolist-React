import ToDoItem from "./ToDoItem";
import { useState,useEffect } from "react";

function ToDolist(props){
    const [item,setitem] = useState(props.task);
    //let handleclick = props.fun;
    function handleclick(index){
        let updatedtask = item.filter((arr,i) => arr[i] !== arr[index]);
        localStorage.setItem("items",JSON.stringify(updatedtask))
        console.log(updatedtask,"updated tsak",index);
        setitem(updatedtask);
      }
    return(
        <>
        <h1>TASKS</h1>
        <br/>
        <div className="to-do-list">
            {item.map((task, index) => <li key={index}><input className="check" type="checkbox" /><ToDoItem data={task} index={index} handleclick={handleclick}/><div className="btndiv">
            </div></li>)}
        </div>
        </>
    )
}

export default ToDolist;