import React from "react"
import { useSelector } from "react-redux"

function Post() {
  const post = useSelector(state => {
    return state.selectedPost
  })

  if (post) {
    return (
      <div className="align-items-center p-3">
        <h1>Post # {post.id}</h1>
        <h2>
          {post.title}
        </h2>
        <p>
          {post.body}
        </p>
      </div>
    )
  } else {
    return (
      <div className="align-items-center p-3">
        <h1>
          Select Post to view details
        </h1>
      </div>
    )
  }

}

export default Post
