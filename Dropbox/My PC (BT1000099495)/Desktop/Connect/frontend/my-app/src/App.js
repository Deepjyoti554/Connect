import React from 'react'
import Axios from "axios"
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState("")

  const getData = async () =>{
    const respose = await Axios.get("http://localhost:5000/getAllData");
    setData(respose.data);
  }

  //Whenever we get the data from getData() func -> useEffect Hook update the Virtual DOM
  useEffect(() =>{
    getData()
  }, []);


  return (
    <div>{data}</div>
  )
}

export default App