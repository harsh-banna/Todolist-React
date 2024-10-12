import { useEffect, useState } from 'react'
import Header from './components/Header'
import ToDolist from './components/ToDolist'
import './index.css'

function App() {
  const [todo, settodo] = useState("");
  const [tasks, settasks] = useState(()=>{
    const localval = localStorage.getItem("items")
    if(localval == null){return []}
    return JSON.parse(localval)
  });
  useEffect(() => {
    localStorage.setItem("items",JSON.stringify(tasks))
   },[tasks]);
  //console.log(todo,"app");
  function handleclick(){
    let stuff=todo;
    if(stuff.trim() !== ""){
    settasks(t => [...t,stuff]);}
    else{
      alert("enter something");
    }
  }

  // useEffect(() => {
  //   localStorage.setItem("items",JSON.stringify(tasks))
  //  },[tasks])

  return (
    <>
      <div className='app'>
        <Header></Header>
        <br/>
        <div className='inputfield'>
        <input type="text" onChange={(e)=>settodo(e.target.value)}/>
        <a href="/"><button onClick={handleclick}>ADD</button></a>
        </div>
        <br/>
        <ToDolist task={tasks}  ></ToDolist>
      </div>
    </>
  )
}
export default App
