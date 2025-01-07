import React, {useState, useEffect} from 'react';
import './App.css';
import CurrentGameTable from './CurrentGameTable.js';
import Standings from './Standings.js';
import Form from './Form.js';
import dbData from './dbData.js';
// console.log("var1: ",dbData["var1"])

function App() {
  var [formLoading, setFormLoading] = useState(false)
  var [formActive, setFormActive] = useState(false)

  useEffect(() => {
    console.log('1. UseEffect Initializing...')

  }, []);

  function handlePredsClick() {
    setFormLoading(true)
    setTimeout(() => {
      setFormActive(true)
    },350)
  }

  const vars = "temp"
  const gameDict = dbData["gameDict"]
  const picksOpen = dbData["picksOpen"]



////////////////////////////////////////////////////////////

  return (
    <div className="App">
      
      <p id="title">
        QUINIELA 2025
      </p>
      <br></br><br></br><br></br><br></br><br></br>


      <div id="loadFormFlash" 
        className={formLoading ? "loadFlashActive loadFormFlash":"loadFormFlash"}>
      </div>


      {picksOpen ? (
          <button className="makePreds" 
          onClick={() => handlePredsClick()}
          >Make Picks</button>      
      ) : ( <></>)}

<br></br><br></br><br></br><br></br><br></br>

      <Standings vars={vars}></Standings>

      <CurrentGameTable vars={vars}></CurrentGameTable>


      


      
      {formActive ? (
        <Form gameDict={gameDict}></Form>
      ) : (
        <></>
      )}

        <div>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br>
          hola :D
          <br></br><br></br><br></br><br></br><br></br>
        </div>

    </div>
  );
}

export default App;
