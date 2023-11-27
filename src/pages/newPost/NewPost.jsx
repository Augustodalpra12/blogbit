import NavBarAdmin from "../../components/navbarAdmin/NavBarAdmin"
import "./newpost.css"

export default function NewPost() {
  return (
    <>
    <NavBarAdmin/>
      <div className="newPost">
        <img className="newPostImage" src="" alt="" />
        <form className="newPostForm">
          <div className="newPostFormGroup">
            <label htmlFor="fileInput">
            <i class="fileInputButton fa-solid fa-plus"></i>
            </label>
            <input type="file"  id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Titulo" className="newPostInput" autoFocus={true}/>
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
