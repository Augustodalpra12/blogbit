import SinglePost from "../../components/singlePost/SinglePost"
import Sidebar from "../../components/sidebar/Sidebar"
import "./singleAdmin.css"

import {useParams} from "react-router"

export default function SingleAdmin() {
  let { postId } = useParams();

  return (
    <div className="singleAdmin">
      
      <SinglePost admin={true} id={postId}/>
      <Sidebar/>
    </div>
  )
}
