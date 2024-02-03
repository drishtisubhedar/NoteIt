import { useState } from 'react'

function TakeNote({addNote}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");

    return <div>
        <div className="flex items-center flex-col mt-12">
            <input type="text" placeholder='title' className='w-[20%] px-4 py-2 bg-sky-100 rounded-t-lg text-sm' onChange={(e) => {
                setTitle(e.target.value);
            }} />
            <input type="text" placeholder='description' className='w-[20%] p-4 bg-sky-200 rounded-b-lg' onChange={(e) =>{
                setDescription(e.target.value)
                console.log(description)
            }}/>
            <button className='bg-sky-200 m-2 py-1.5 px-5 rounded-full' onClick={()=> {
                const newNote = {title, description}
                addNote(newNote)
                setTitle("");
                setDescription("")
            }}>+</button>
        </div>
        
    </div>
}
export default TakeNote;
