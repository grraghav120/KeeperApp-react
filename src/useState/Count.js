import React,{useState} from "react";


function Count() {
    let [count,setCount]=useState(0);
    function increaseCount(){
        setCount(count+1);
    }
    function deacreaseCount(){
        setCount(count-1);
    }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={deacreaseCount}>-</button>
    </div>
  );
}

export default Count;
