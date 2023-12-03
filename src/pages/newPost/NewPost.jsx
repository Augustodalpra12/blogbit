import NavBarAdmin from "../../components/navbarAdmin/NavBarAdmin"
import "./newpost.css"

import React, { useState } from 'react';

export default function NewPost() {
  const [file, setFile] = useState(null);

  const fchange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
  
  return (
    <>
    <NavBarAdmin/>
      <div className="newPost">
        <img className="newPostImage" src={file && URL.createObjectURL(file)} alt="" />

        <form className="newPostForm" method="post" action="/api/new-post" enctype="multipart/form-data">
          <div className="newPostFormGroup">
            <label htmlFor="fileInput">
            <i class="fileInputButton fa-solid fa-plus"></i>
            </label>
            
            <input type="file" id="fileInput" name="file" style={{display:"none"}} onChange={fchange}/>

            <input type="text" name="name" placeholder="Titulo" className="newPostInput" autoFocus={true}/>
          </div>
          <div className="newPostFormGroup">
            <textarea placeholder="Escreva aqui!" name="content" typeof="text" className="newPostInput newPostText"></textarea>
          </div>
          <button className="newPostSubmit">Publique</button>
        </form>
        
      </div>
    </>
  )
}
