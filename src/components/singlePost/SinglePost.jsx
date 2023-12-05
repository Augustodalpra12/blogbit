import NavBar from "../navbar/NavBar"
import "./singlePost.css"

import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function SinglePost(props) {
  const [post, setPost] = useState([]);

  useEffect(() => {
      fetch(`/api/post/${props.id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  })

  return (
    <>
    <div className="singlePost">
    <NavBar/>
      <div className="singlePostWrapper">
        <img className="singlePostImage" src={post.image} alt="" />
        <h1 className="singlePostTitle">{post.name}
            {props.admin 
              ? 
              <div className="singlePostEdit">
              <Link className="link" to={`/admin/edit-post/${props.id}`}>
              <i className="singlePostIconEdit fa-solid fa-pen-to-square"></i>
              </Link>

                <i className="singlePostIconDelete fa-solid fa-trash" onClick={() => {
                    fetch(`/api/post/${props.id}/delete`)
                    .then(res => res.text())
                    .then(data => {
                        window.location.href = `/admin/?err=${data}`
                    })
                }}></i>


              </div> 
              : 
              ''
            }
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostCriador">Categoria: <b>{post.category}</b></span>
            <span className="singlePostDate">{new Date(post.date).toLocaleString()}</span>
        </div>
        <p className="singlePostDescription">{post.content}</p>
      </div>
    </div>
    </>
  )
}
