import NavBarAdmin from "../../components/navbarAdmin/NavBarAdmin"
import "./neweditpost.css"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function NewEditPost() {
  let { postId } = useParams()

  const [file, setFile] = useState(null)

  const fchange = (event) => {
      const file = event.target.files[0]
      setFile(file)
  }

  let is_edit = (postId !== undefined)

  const [postData, setPostData] = useState(null)

  useEffect(() => {
      if(!is_edit){
        return
      }

      fetch(`/api/post/${postId}`)
      .then(res => res.json())
      .then(data => setPostData(data))
  }, [is_edit, postId])

  let image_element

  if(is_edit && file){
      image_element = <img className="newPostImage" src={URL.createObjectURL(file)} alt="" />
  } else if(is_edit){
      image_element = <img className="newPostImage" src={postData && postData.image} alt="" />
  } else{
      image_element = <img className="newPostImage" alt="" />
  }

  return (
    <><NavBarAdmin/>
      <div className="newPost">
        {image_element}
        <form className="newPostForm" method="post" action={is_edit ? `/api/edit-post/${postId}` : '/api/new-post'} enctype="multipart/form-data">
          <div className="newPostFormGroup">
            <label htmlFor="fileInput">
            <i class="fileInputButton fa-solid fa-plus"></i>
            </label>

            <input type="file" name="file" id="fileInput" style={{display:"none"}} onChange={fchange}/>

            <input type="text" name="name" placeholder="Titulo" className="newPostInput" autoFocus={true} value={(is_edit && postData) ? postData.name : ''}/>
            <input type="text" name="category" placeholder="Categoria" className="newPostInput" value={(is_edit && postData) ? postData.category : '' }/>
            
          </div>
          <div className="newPostFormGroup">
            <textarea placeholder="Escreva aqui!" name="content" typeof="text" className="newPostInput newPostText" defaultValue={(is_edit && postData) ? postData.content : ''}></textarea>
            <button className="newPostSubmit">{is_edit ? 'Atualize' : 'Publique'}</button>
          </div>
          
        </form>
      </div>
    </>
  )
}
