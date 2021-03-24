import axios from 'axios'
import React,{useState,useEffect} from 'react'
import AddNotes from './AddNotes'
import Noteslist from './Noteslist'

export default function Mynotes(props){
    const [notes , setNotes] = useState([])

    useEffect(()=>{
        axios.get('http://dct-user-auth.herokuapp.com/api/notes',{
            headers : {
                "x-auth":localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            setNotes(result)
        })
        .catch((err)=>{
            alert('catch error:',err.message)
        })
    },[])

    //adding notes 
    const addItem =(data)=>{
        setNotes([data , ...notes])
    }

    //remove 
    const handleRemove =(id)=>{
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
            headers : {
                "x-auth":localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            alert(`${result.title} notes is successfully removed`)
        })

        const result = notes.filter((ele ,i)=>{
            return ele._id !== id 
        })
        setNotes(result)
    }

    const editItem =(formData ,id )=>{
        axios.put(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,formData,{
            headers : {
                "x-auth":localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            alert(`${result.title} notes is successfully updated`)
        })

        const result = notes.map((ele,i)=>{
            if(ele._id ===id){
                return {...ele , ...formData}
            } else {
                return {...ele}
            }
        })
        setNotes(result)
    }

    return(
        <div>
            <h2> My_Notes</h2>
            <Noteslist notes = {notes} handleRemove ={handleRemove} editItem ={editItem}/>
            <AddNotes addItem = {addItem}/>
        </div>
    )
}