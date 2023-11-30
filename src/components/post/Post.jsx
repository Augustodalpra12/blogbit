import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_640.jpg" alt="" />
      <div className="postInfo">
        <div className="postCategories">
        <span className="postCategories">Web</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <hr></hr>
        <span className="postDate">1 hora atras</span>
      </div>
      <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, hic! Porro sed ullam expedita a, sint et excepturi quasi sit distinctio, provident corporis autem vitae odit praesentium eos voluptatem nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, hic! Porro sed ullam expedita a, sint et excepturi quasi sit distinctio, provident corporis autem vitae odit praesentium eos voluptatem nam.</p>
    </div>
    

  )
}
