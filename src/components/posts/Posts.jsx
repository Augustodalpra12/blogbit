import Post from "../post/Post"
import "./posts.css"

import React, { useEffect, useState } from "react"

export default function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts/' + ((props.category === undefined) ? '' : props.category))
      .then(res => res.json())
      .then(data => setPosts(data))
  })

  const is_admin = props.admin !== undefined

  return (
    <div className="posts">
      {posts.map((post) => {
          return <Post {...post} admin={is_admin} />
      })}
    </div>
  )
}
