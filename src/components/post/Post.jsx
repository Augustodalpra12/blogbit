import "./post.css"

export default function Post(props) {
  return (
    <div className="post">
      <img className="postImg" src={props.image} alt="" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategories" onClick={() => {
              window.location.href=`/categorias/${props.category}`
          }}>{props.category}</span>
        </div>
        <span className="postTitle" onClick={() => {
            window.location.href =  (props.admin ? '/admin' : '') + `/post/${props.id}`
        }}>{props.name}</span>
        <hr></hr>
        <span className="postDate">{new Date(props.date).toLocaleString()}</span>
      </div>
      <p className="postDescription">{props.content.substring(0, 25)}...</p>
    </div>
    

  )
}
