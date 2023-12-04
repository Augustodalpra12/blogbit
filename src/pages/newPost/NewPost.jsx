import NavBarAdmin from "../../components/navbarAdmin/NavBarAdmin"
import "./newpost.css"

export default function NewPost() {
  return (
    <>
    <NavBarAdmin/>
      <div className="newPost">
        <img className="newPostImage" src="https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_1280.jpg" alt="" />
        <form className="newPostForm">
          <div className="newPostFormGroup">
            <label htmlFor="fileInput">
            <i class="fileInputButton fa-solid fa-plus"></i>
            </label>
            <input type="file"  id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Titulo" className="newPostInput" autoFocus={true}/>
            <input type="text" placeholder="Categoria" className="newPostInput"/>
          </div>
          <div className="newPostFormGroup">
            <textarea placeholder="Escreva aqui!" typeof="text" className="newPostInput newPostText"></textarea>
          </div>
          <button className="newPostSubmit">Publique</button>
        </form>
        
      </div>
    </>
  )
}
