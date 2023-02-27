import React from "react";
import "./index.css";
import { useState } from "react";
import "./App.css";

export const List=(props)=> {
  const [data, setdata] = useState(" ");
  const [arr,setarr]=useState([]);
  const handlechange = (event) => {
    setdata(event.target.value);
  };
  const push=()=>{
    setarr((previous_data)=>{
      return([...previous_data,data])
    })
    setdata("")
  }

  return (
    <div className="todo">
      
        <h1>TO DO LIST</h1>
        <input
          type="text"
          value={data}
          onChange={handlechange}
          placeholder="Enter tasks"
        />
        <button type="submit" onClick={push} disabled={!data}>add</button>
        <ul>
        {arr.map((x) => {
          return <li>{x}</li>;
        })}
        </ul>
     
    </div>
  );
}