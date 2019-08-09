import React from "react";
//disini kita mengiport sebuah connect dimana connect ini akan kita gunakan untuk mengirimkan dari pada function yang akan dibuat nanti yaitu menstat props
import { connect } from "react-redux";

function Counter(props){
  return(
    <div>
      <h1>Saya mesin penghitung</h1>
      // Count : {props.count} akan membaca Counter(props)
      <p>Count : {props.count}</p>
      <button>increment</button>
    </div>
  )
}

//di funsi mapStatetoProps digunakan untuk mengirim fungsi keprops
function mapStatetoProps(state){
  console.log("mapStatetoProps", state);
  return{
    //dimana count ini akan masuk kedalam Counter(props)
    count : state.count
  }
}

export default connect(mapStatetoProps)(Counter);
