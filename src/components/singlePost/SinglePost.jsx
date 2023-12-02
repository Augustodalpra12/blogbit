import NavBar from "../navbar/NavBar"
import "./singlePost.css"

import React, { useEffect, useState } from "react";

export default function SinglePost(props) {
  
  const [post, setPost] = useState([]);

  useEffect(() => {
      fetch('/api/post/' + props.id)
      .then(res => res.json())
      .then(data => setPost(data))
  })

  return (
    <>
    <div className="singlePost">
    <NavBar/>
      <div className="singlePostWrapper">
        <img className="singlePostImage" src={post.image} alt="" />
        <h1 className="singlePostTitle">{post.name}</h1>
        <div className="singlePostInfo">
            <span className="singlePostDate">{new Date(post.date).toLocaleString()}</span>
        </div>
        <p className="singlePostDescription">{post.content}</p>
      </div>
    </div>
    </>
  )
}
