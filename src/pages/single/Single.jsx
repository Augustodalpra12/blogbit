import NavBar from "../../components/navbar/NavBar"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import "./single.css"

import { useParams } from "react-router";

export default function Single() {
  let { postId } = useParams();
  
  return (
    <div className="single">
      <SinglePost id={postId}/>
      <Sidebar/>
    </div>
  )
}
