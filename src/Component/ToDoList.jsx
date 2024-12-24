import { useState } from "react";
import "./ToDoList.css";
const ToDoList = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // list.push({
    //   value,
    // });
    if(value.trim()!=='')
    setList([...list,{value}])
    setValue("");
  };

  const deleteList = (index)=>{
    const updatedList = list.filter((li,i)=> i !== index)
    setList(updatedList)
  }

  return (
    <div className="container">
      <h1 className="title">TO DO LIST</h1>
      <form className="input-section" onSubmit={handleSubmit}>
        <input
          className="input-box"
          type="text"
          placeholder="type list here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          //   onChange={(e) => list.push(value)}
        />{" "}
        <button className="addBtn" type="submit">
          Add
        </button>
      </form>

    {list.length>0 && 
      <div className="lists-section">
        <ol>
          {list.map((list, index) => (
            <li key={index}>
              <p>
                <b>{index + 1}.</b> {list.value}
              </p>{" "}
              <button className="del" onClick={()=>deleteList(index)}>X</button>
            </li>
          ))}
         
        </ol>
      </div>}
    </div>
  );
};
export default ToDoList;
