import React from 'react'

const Noteitem = ({note, deleteNote}) => {

  return (
    <div className='bg-white p-4 rounded-xl shadow'>
        <h3 className='text-ig font-semibold mb-1'>{note.title}</h3>
        <p className='text-green-700 mb-3' >{note.content}</p>
        <button className='text-sm text-red-600 hover:underline' onClick={()=>{deleteNote(note.id)}}>Delete</button>
    </div>
  )
}

export default Noteitem
