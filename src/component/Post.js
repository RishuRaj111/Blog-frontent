import React from 'react'
import {formatISO9075} from "date-fns";
import {Link} from 'react-router-dom'
const base_url = process.env.REACT_APP_BASE_URL || "http://localhost:4000/"


const Post = ({_id,title,summary,cover,content,createdAt,author}) => {
  return (
    <div>
        <div className="post">
          <div className="image">
            <Link to={`/post/${_id}`}>
          <img src={`${base_url}`+cover} alt="" />
            </Link>
            </div>
          <div className="texts">
          <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
          </Link>
            
            <p className="info">
              <a href="" className="author">{author.username}</a>
              <time dateTime="">{formatISO9075(new Date(createdAt))}</time>
            </p>
            <p className='summary'>{summary}</p>
          </div>
        </div>
    </div>
  )
}

export default Post