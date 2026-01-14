import { useState, useEffect } from 'react'
import './App.css'
import Noteform from './components/Noteform'
import Notelist from './components/Notelist'

function App() {

  const [notes, setNotes] = useState(()=>{
    const savedNotes=localStorage.getItem('notes')
    return savedNotes?JSON.parse(savedNotes):[]
  })

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const addNote=(note)=>{
    setNotes([...notes,note])
  }

  const deleteNote=(id)=>{
    setNotes(notes.filter(note=>note.id!==id))
  }
  

  return (
    <>

    <div className='min-h-screen bg-green-100 p-6'>
      <h1 className='text-2xl font-bold text-center mb-4'>Notes App</h1>
      <Noteform addNote={addNote}/>
      <Notelist notes={notes} deleteNote={deleteNote}/>
    </div>
      
    </>
  )
}

export default App
