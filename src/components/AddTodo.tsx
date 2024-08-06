import { useState } from "react";
import { IToDo } from "../App";

// import React from 'react'
type Props = {
  id:number;
  title:string;
  action:string;
  addtodo:(data:IToDo)=>void;
};
const AddTodo = ({title, action, addtodo, id}: Props) => {
  const [value, setValue] = useState<string>('')
  return (
    <>
    {title}
    <br />
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Nhap cong viec"
        />
        <button onClick={()=>addtodo({id:id, title:value, completed:false})}>{action}</button>
   
    </>
  );
};

export default AddTodo;
