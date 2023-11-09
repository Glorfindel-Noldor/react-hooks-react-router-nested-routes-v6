import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers]=useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/users')
    .then((res)=>(res.json()))
    .then((data)=>(setUsers(data)))
    .catch((error)=>(alert(error,'we aint find ship!')))
  },[])
  
  
  return (
    <>
      <header>
       <NavBar  /> 
      </header>
      <Outlet context={users}/>
    </>
  );
};

export default App;
