import Post from "../post/Post"
import "./posts.css"

import React, { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fetch('/api/posts')
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
