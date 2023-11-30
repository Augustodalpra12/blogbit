import SinglePostAdmin from "../../components/singlePostAdmin/SinglePostAdmin"
import Sidebar from "../../components/sidebar/Sidebar"
import "./singleAdmin.css"
import NavBarAdmin from "../../components/navbarAdmin/NavBarAdmin"

export default function SingleAdmin() {
  return (
    <div className="singleAdmin">
      
      <SinglePostAdmin/>
      <Sidebar/>
    </div>
  )
}
