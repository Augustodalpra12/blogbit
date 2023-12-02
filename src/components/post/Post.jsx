import "./post.css"

export default function Post(props) {
  if(props === null){
      return 
  }

  return (
    <div className="post">
      <img className="postImg" src={props.image} alt="" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategories">{props.category}</span>
        </div>

        <span className="postTitle">{props.name}</span>

        <hr></hr>
        <span className="postDate">{props.date}</span>
      </div>
      <p className="postDescription">{props.content}</p>
    </div>
    

  )
}
