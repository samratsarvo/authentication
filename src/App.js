import React,{useState,useEffect} from 'react'
import NavBar from './NavBar'

export default function App(props){
  const [loggedIn , setLoggedIn] = useState(false)

  const handleAuth = ()=>{
    setLoggedIn(!loggedIn)
  }
  /* when we reload the page after the login is set back to logout page but the token 
  which is present in the local storage is still present so by using useeffect hook  we can handle the page reload   
  */

  useEffect(()=>{
    if(localStorage.getItem('token'))
      handleAuth()
  },[])

  return(
    <div>
       <h1>user Auth</h1>
       <NavBar loggedIn ={loggedIn} handleAuth ={handleAuth}/>
    </div>
  )
}