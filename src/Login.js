import React,{useState} from 'react'
import axios from 'axios'

export default function Login(props){
    const [email , setEmail] = useState([])
    const [password , setPassword] = useState([])

    const handleChange = (e) =>{
        const input = e.target.name
        if(input === 'email'){
            setEmail(e.target.value)
        } else if(input === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault()

        const formData ={
            email : email,
            password : password
        }
        
        axios.post('http://dct-user-auth.herokuapp.com/users/login', formData)
            .then((response) =>{
                const result = response.data
                //console.log(result)
                if(Object.keys(result).includes('errors')){
                    // here we can use result.hasOwnProperty('errors')
                    alert(result.errors)
                } else{
                    alert('successfully logged in ')
                    // here we are storing the token in the local storage 
                    localStorage.setItem('token',result.token)
                    props.history.push('/')// redirecting to home component page 
                    props.handleAuth()
                }
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }

    return(
        <div>
            <h2> User Login </h2>

            <form onSubmit ={handleSubmit}>
                <input type ="text" name ="email"
                placeholder ="email"
                value ={email} onChange ={handleChange}/><br/>

                <input type ="password" name = 'password'
                placeholder ="password"
                value ={password} onChange ={handleChange}/><br/>

                <input type='submit' value ="login"/>
            </form>
        </div>
    )
}