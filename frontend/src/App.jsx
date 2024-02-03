import { useState } from 'react'
import TakeNote from './components/TakeNote'
import DisplayNote from './components/DisplayNote'
import './App.css'

function App() {
  const [note, setNote] = useState([
    {
      title: "Math Syllabus",
      description: "Matrix, calculus, sets"
    },{
      title: "Address",
      description: "b-654, deep mahak behind kamla nagar, pincode-657848, city-vadodare, state-Gujarar, India"
    },
    {
      title:"Budget",
      description: "8000 cr"
    },{
      title:"todays schedule",
      description: "react, more react"
    }
  ])

  return (
    <div>
      <TakeNote addNote={(newNote)=>{
        setNote([...note, newNote])
      }}></TakeNote><br />
      <DisplayNote notes={note}></DisplayNote>
    </div>
  )
}

export default App
