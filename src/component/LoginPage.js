import React, { useState,useContext } from 'react'
import {UserContext} from  './UserContext'
import {Navigate} from'react-router-dom'
const base_url = process.env.REACT_APP_BASE_URL || "http://localhost:4000/"



const LoginPage = () => {
  // let navigate= useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const {setUserInfo} = useContext(UserContext)
  async function login(ev){
    ev.preventDefault()
   const response = await fetch(`${base_url}login`,{
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include' // include cookies in the request
    })
    if (response.ok){
      response.json().then(userInfo => {
       setUserInfo(userInfo)
         setRedirect(true);
      })
     
    }
    else{
      alert('Invalid credentials')
    }
  }
  if(redirect){
   return <Navigate to={'/'}/>
  }

  return (
    <div>
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input type="text" placeholder='UserName' value={username} onChange={ev=>setUsername(ev.target.value)}/>
            <input type="password" placeholder='Password'value={password} onChange={ev=>setPassword(ev.target.value)}/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginPage