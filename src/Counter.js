import React from "react";

function Counter(props){
  return(
    <div>
      <h1>Saya mesin penghitung</h1>
      <p>Count : {props.count}</p>
      <button>increment</button>
    </div>
  )
}

export default Counter;
