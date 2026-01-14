import React from 'react'
import { useState, useEffect } from 'react'
import Noteitem from './Noteitem'

const Notelist = ({notes, deleteNote}) => {

    

  return (
    <div className='grid gap-4'>
        {notes.length===0?
        <p className='text-center text-gray-100'>No notes yet</p>:
            notes.map(note=>(
                <Noteitem
                key={note.id}
                note={note}
                deleteNote={deleteNote}

                />
            ))
        }
    </div>
  )
}

export default Notelist
