import React from 'react'
import { useState, useEffect } from 'react'

const Noteform = ({ addNote }) => {

    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")

    const submitInput = () => {
        if(!title || !content) return
        addNote({
            id: Date.now(),
            title,
            content
        })
        settitle("")
        setcontent("")
    }

    return (
        <div>
            <form>
                <input className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring" placeholder='Note title' type="text" value={title} onChange={(e) => settitle(e.target.value)} />
                <textarea placeholder='Write your note...' className='w-full py-2 mb-3 border focus:outline-none focus:ring' onChange={(e) => setcontent(e.target.value)}></textarea>

                <button type='submit' className='bg-blue-500 w-full hover:bg-blue-700 text-white py-2 rounded transition' onClick={submitInput}>Submit</button>
            </form>
        </div>
    )
}

export default Noteform
