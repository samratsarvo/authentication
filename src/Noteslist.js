import React from 'react'
import NotesItems from './NotesItem'

export default function Noteslist({notes , handleRemove , editItem}){
    //const {notes , handleRemove , editItem} = props
    return(
        <div>
            <h3>my notes list - {notes.length}</h3>
            {notes.map((ele,i)=>{
                return (
                    <NotesItems key={i} {...ele} handleRemove ={handleRemove} editItem ={editItem}/>
                )
            })}
        </div>
    )
}