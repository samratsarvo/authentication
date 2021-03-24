import React from 'react'
import {Link , Route,withRouter} from 'react-router-dom'
import Account from './Account'
import Home from './Home'
import Login from './Login'
import Mynotes from './Mynotes'
import Register from './Register'

const  NavBar =({loggedIn , handleAuth ,history}) => {
    //const {loggedIn, handleAuth} = props
    return(
        <div>
            <ul>
                <li><Link to ="/">Home</Link></li>

                {loggedIn ? (
                    <React.Fragment>
                        <li><Link to='/account'>Account</Link></li>
                        <li><Link to="/mynotes">My_Notes</Link></li>
                        <li><Link onClick ={()=>{
                            //removing the jwt token from the local storage 
                            localStorage.removeItem('token')
                            alert('you are successfully logged out')
                            handleAuth()
                            history.push('/')
                        }}>Logout</Link></li>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <li><Link to ='/register'>Register</Link></li>
                         <li><Link to = '/login'>Login</Link></li>
                    </React.Fragment>
                )}
            </ul>
            <Route path ="/" component ={Home} exact/>
            <Route path ="/register" component ={Register}/>
            <Route path ='/login' render ={(props)=>{
                return <Login
                {...props} handleAuth ={handleAuth}/>
            }}/>
            {/* here we can use the another approach for passing props to component while using react-router-dom 
             <Route path ="/login"> </login  handleAuth = {handleAuth}></Route> */}
             
            <Route path = '/account' component ={Account}/>
            <Route path ='/mynotes' component ={Mynotes}/>

        </div>
    )
}
// const wrapped component  = withRouter(NavBar)
//export default wrapped component 
export default withRouter(NavBar) 