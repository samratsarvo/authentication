import React,{useState} from 'react'

export default function NotesForm({FormSubmission , title:name , body:note , handleToggle}){
    //const {FormSubmission , title:name , body:note, handleToggle} = props
    const [title , setTitle] = useState(name ? name:'')
    const [body , setBody] = useState(note ? note :'')

    const handleChange =(e) =>{
        const input = e.target.name
        if(input === "title"){
            setTitle(e.target.value)
        } else if(input === 'body'){
            setBody(e.target.value)
        }
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        const formData ={
            title : title,
            body  : body
        }
        
        FormSubmission(formData)
        if(handleToggle){
            handleToggle()
        }

        setBody('')
        setTitle('')
    }
    return (
        <div>
           
           <form onSubmit = {handleSubmit}>
               <input type ="text" value ={title} placeholder ="Notes Title"
               onChange ={handleChange} name ="title"/> <br/>
               <textarea type ="text" value ={body} placeholder ="body of notes"
               onChange ={handleChange} name ="body"/><br/>

               <input type ="submit" value ='save'/>
           </form>
        </div>
    )
}