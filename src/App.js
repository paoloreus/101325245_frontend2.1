import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";

export default App;

function App() {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[emailid, setEmailid] = useState("");
    const[backendData, setBackendData] = useState([])

    const fetchItems = async () => {
        const data = await fetch('/employees')
        const items = await data.json()
        setBackendData(items);
    }




  return (

      <section>
          {
          items.map(item => {
          <div>
              <p>{item.firstName}</p>
              <p>{item.lastName}</p>
              <p>{item.emailid}</p>
          </div>

          })
          }


      </section>

  )}


