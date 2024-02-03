import React from "react";

function DisplayNote({ notes }) {
    return <div>
        {
            notes.map(function (note) {
                return <>
                
                    <div className="flex items-center flex-col mb-3.5">
                        <h1 className="w-[40%] px-4 py-2 bg-sky-100 rounded-t-lg text-sm">{note.title}</h1>
                        <h1 className="w-[40%] p-4 bg-sky-200 rounded-b-lg">{note.description}</h1>
                </div>
                </>
            })
        }
    </div>
}
export default DisplayNote;