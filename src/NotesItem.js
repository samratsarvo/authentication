import React,{useState} from 'react'
import EditNotes from './EditNotes'

export default function NotesItems({_id , title , body , handleRemove , editItem}){
    //const {_id ,title , body , handleRemove , editItem} = props
    const [toggle , setToggle] = useState(false)

    const remove =()=>{
        const conformation =window.confirm('Are are sure')
        if(conformation)
            handleRemove(_id)
    }

    const handleToggle = ()=>{
        const result  = !toggle
        setToggle(result)
    }

    return(
        <div>
           {toggle ? (
               <div>
                   <EditNotes id ={_id} title = {title} body={body} 
                   editItem ={editItem} handleToggle ={handleToggle}/>
                   <button onClick ={handleToggle}>Cancel</button>
               </div>
           ) : (
               <div>
                   <blockquote>
                        <b>Title :</b>{title}<br/>
                        <b>Body :</b>{body}
                        <button onClick ={handleToggle}>Edit</button>|<button onClick ={remove}>remove</button>
                    </blockquote>
               </div>
           )}
        </div>
    )
}