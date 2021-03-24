import React from 'react'
import axios from 'axios'
import NotesForm from './NotesForm'

export default function AddNotes({addItem}){//second approach is here ({additem})
    //first approach of destruction of props 
    //const {addItem} = props
    const FormSubmission =(formData)=>{
        axios.post('http://dct-user-auth.herokuapp.com/api/notes',formData ,{
            headers :{
                "x-auth" : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result  = response.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)
            } else{
                alert(`${result.title} notes  is successfully saved`)
                addItem(formData)
            }
        })
        .catch((err)=>{
            alert(err.message)
        })

    }
    return(
        <div>
            <NotesForm FormSubmission = {FormSubmission}/>
        </div>
    )
}