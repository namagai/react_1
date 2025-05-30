import { useState } from 'react';
import './App.css';

function App() {
  return <Board />
}


function  Board() {

  return (
    <>
      <div className="board row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square()
{
  
  const [value, setValue]=useState("")
  function handleClick()
  {
    console.log("clcicked!") 
    setValue("sleep")
  }
  return  <button className="square" onClick={handleClick}>{value}</button>
 }
export default App;
