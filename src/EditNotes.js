import React from 'react'
import NotesForm from './NotesForm'

export default function EditNotes({id ,title,body , handleToggle,editItem}){
    //const {id , title , body , handleToggle , editItem} = props
    const FormSubmission =(formData)=>{
        editItem(formData,id )
    }

    return(
        <div>
            <h2>Edit Notes</h2>
            <NotesForm
            title ={title} 
            body ={body} 
            FormSubmission ={FormSubmission} 
            handleToggle ={handleToggle}/>
        </div>
    )
}