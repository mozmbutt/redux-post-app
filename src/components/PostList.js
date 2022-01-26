import { useDispatch, useSelector } from "react-redux"
import { selectPost } from "../actions"

function PostList() {
  const dispatch = useDispatch()
  const posts = useSelector(state => {
    return state.posts
  })

  return (
    <div className="d-flex flex-column align-items-center p-3">
      <h1>All Posts</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(post =>
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  <button className="btn btn-info ml-2" onClick={() => dispatch(selectPost(post))}>
                    details
                  </button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default PostList
