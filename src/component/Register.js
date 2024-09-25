import React,{useState} from 'react'
const base_url = process.env.REACT_APP_BASE_URL || "http://localhost:4000/"


const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    async function register(ev){
        ev.preventDefault();
        
     const response= await fetch(`${base_url}register`,{
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        })
        console.log(response)
        if(response.status===200){
            alert("Registration successful")
        } else{
            alert("Registration failed")
        }
    }
  return (
    <div>
         <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" placeholder='UserName' value={username} onChange={ev => setUsername(ev.target.value)}/>
            <input type="password" placeholder='Password'value={password} onChange={ev => setPassword(ev.target.value)}/>
            <button>Register</button>
        </form>
    </div>
  )
}

export default Register