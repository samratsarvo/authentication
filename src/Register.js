import React,{useState} from 'react'
import axios from 'axios'

export default function Register(props){
    const [userName , setUserName] = useState([])
    const [email ,setEmail] = useState([])
    const [password , setPassword] = useState([])

    const handleChange = (e)=>{
        const input = e.target.name
        if(input === 'username'){
            setUserName(e.target.value)
        } else if(input === 'email'){
            setEmail(e.target.value)
        } else if(input === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit =(e) =>{

        e.preventDefault()

        const formData = {
            username : userName,
            email : email,
            password : password
        }
        //if validation pass

        axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
            .then((response)=>{
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.message)
                } else{
                    alert('successfully created an account')
                    props.history.push('/login')
                }
            })
            .catch((err)=>{
                console.log(err.message)
            })

    }

    return(
        <div>
            <h2> User Registration  </h2>

            <form onSubmit ={handleSubmit}>
                <input type ='text' value = {userName}
                placeholder = "username"
                name ="username"
                onChange ={handleChange}/><br/><br/>

                <input type ='email' value = {email}
                placeholder ='email'
                name ="email"
                onChange ={handleChange}/><br/><br/>
                
                <input type ='password' value ={password}
                placeholder ="password"
                name ="password"
                onChange ={handleChange}/> <br/><br/>

                <input type="submit" />
            </form>
        </div>
    )
}