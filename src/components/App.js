
import React, { useState } from "react";
import './../styles/App.css';
import DisplayInfo from "./DisplayINfo";

const App = () => {

  const [data,setData]=useState();
  const [loading,setLoading]=useState(true);

   function fetchData(){
    fetch('https://reqres.in/api/users')
    .then((response)=>response.json())
    .then((jsonData)=>{
      setData(jsonData.data)
      setLoading(false);
      console.log(jsonData)
    })
    .catch((error)=>console.log(error))
  }
  return (
    <div>
      <div >
        <div className="header">
          <h4>Blue Whales</h4>
          <button className=".btn" onClick={fetchData}>Get User List</button>
        </div>
        <header>
          <div>First name</div>
          <div>Last name</div>
          <div>Eamil</div>
          <div>Avatar</div>
        </header>
        {
          loading?<div className="no_data">No data found to be displayed.</div>:<DisplayInfo arr={data}/>
        }
      </div>
    </div>
  )
}

export default App
