import Post from "../post/Post"
import "./posts.css"

import React, { useEffect, useState } from "react";

export default function Posts(props = null) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts/' + ((props === null) ? '' : props.category))
      .then(res => res.json())
      .then(data => setPosts(data))
  })

  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post {...post} />
      })}
    </div>
  )
}
