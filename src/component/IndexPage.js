import React,{useEffect,useState} from 'react'
import Post from './Post'
const base_url = process.env.REACT_APP_BASE_URL || "http://localhost:4000/"
console.log(base_url)



const IndexPage = () => {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    fetch(`${base_url}post`).then(response => {
      response.json().then(posts=>{
        setPosts(posts);
      });
    })  
  }, [])
  return (
   <>
   {posts.length > 0 && posts.map(post => (
    <Post {...post}/>
   ))}
   </>
  )
}

export default IndexPage