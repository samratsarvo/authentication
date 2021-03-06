import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function Account(props){
    const [user , setUser] = useState([])

    useEffect(()=>{
        axios.get('http://dct-user-auth.herokuapp.com/users/account', {
            headers:{
                "x-auth":localStorage.getItem('token')
            }
        })
        .then((response)=>{
             const result = response.data
             setUser(result)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])
    return(
        <div>
            <h2>User Account</h2>
            <p>Email - {user.email}</p>
            <p>Username - {user.username}</p>

        </div>
    )
}