import React,{useState} from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'; // Import CSS module
import { Navigate } from 'react-router-dom';
import Editor from './Editor';
const base_url = process.env.REACT_APP_BASE_URL || "http://localhost:4000/"



const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const[files,setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)
    async function createNewPost(ev){
        const data = new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('file',files[0]);
        ev.preventDefault()
        console.log(files[0])
        const response = await fetch(`${base_url}post`,{
            method:'POST',
            body:data,
            credentials: 'include' // include cookies in the request
        })
        if(response.ok){
            setRedirect(true)
        } else{
            alert('Failed to create post')
        }
    }
    if (redirect){
      return  <Navigate to={'/'}/>
    }
  return (
    <div>
        <form action="" onSubmit={createNewPost}>
            <input type="title" placeholder={'Title'} value={title} onChange={ev => setTitle(ev.target.value)} />
            <input type="summary" placeholder={'summary'} value={summary} onChange={ev => setSummary(ev.target.value)}/>
            <input type="file"  onChange={ev =>setFiles(ev.target.files)} />
            <Editor value={content} onChange={setContent}/>
           <button style={{marginTop:'5px'}}> Create Post</button>  
       </form>
    </div>
  )
}

export default CreatePost
// formats={formats}