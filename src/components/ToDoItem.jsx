import { useState } from "react";

function ToDoItem(data){
    let i = data.index;
    let del = data.handleclick;
    const [tasknow,settasknow] = useState(data.data);
    const [edit,setedit] = useState(false);
    function handleedit(){     
        setedit(!edit);
        console.log(edit);
    }
    function output(tasknow) {
        if(edit){
            return <input type="text" value={tasknow} onChange={(e)=>{settasknow(e.target.value)}}></input>
        }else{
            return <input type="text" value={tasknow} readOnly ></input>
        }
    }
    return(
        <>
        <div className="items">
        {output(tasknow)}
        <button className="btn edit" onClick={() => handleedit()}>edit</button></div>
        <button className="btn del" onClick={() => del(i)} >delete</button>
        </>
    )
}

export default ToDoItem;