import React, { useContext, useEffect,useState } from 'react'
import { Link,Navigate } from 'react-router-dom'
import { UserContext } from './UserContext'
const base_url = process.env.REACT_APP_BASE_URL || "http://localhost:4000/"


const Header = () => {
  const{setUserInfo,userInfo} = useContext(UserContext)
  // const [redirect, setRedirect] = useState(false)
  useEffect(() => {
    fetch(`${base_url}profile`, {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      })
    })
  }, [])

  function logout(){
    fetch(`${base_url}logout`,{
      credentials:'include',
      method: 'POST',
    }).then(()=>{
   setUserInfo(null)
  // setRedirect(true)
})
  }

   const username = userInfo?.username;
  //  if(redirect){
  //   return <Navigate to="/login"/>
  //  }
  return (
    <div> <header>
      <Link to="/" className='logo'>My Blog</Link>
      <nav>
        {username && (<>
          <Link to='/create'> Create new Post</Link>
          <a onClick={logout}>Logout</a>
        </>)}
        {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )
        }

      </nav>
    </header></div>
  )
}

export default Header