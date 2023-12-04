import NavBar from "../navbar/NavBar"
import "./singlePost.css"

export default function SinglePost() {
  return (
    <>
    <div className="singlePost">
    <NavBar/>
      <div className="singlePostWrapper">
        <img className="singlePostImage" src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_640.jpg" alt="" />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit!
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostCriador">Categoria: <b>Nome</b></span>
            <span className="singlePostDate">1 hora atras</span>
        </div>
        <p className="singlePostDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis iure quae placeat, velit et corrupti eius porro dolores neque distinctio perferendis ab. Eum, velit accusantium! Magni debitis quasi asperiores quam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis iure quae placeat, velit et corrupti eius porro dolores neque distinctio perferendis ab. Eum, velit accusantium! Magni debitis quasi asperiores quam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis iure quae placeat, velit et corrupti eius porro dolores neque distinctio perferendis ab. Eum, velit accusantium! Magni debitis quasi asperiores quam.</p>
      </div>
    </div>
    </>
  )
}
