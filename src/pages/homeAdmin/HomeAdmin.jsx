import "./homeAdmin.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import NavBarAdmin from "../../components/navbarAdmin/NavBarAdmin"


export default function HomeAdmin() {
  return (
    <>
    <NavBarAdmin/>
    <Header/>
    <div className="homeAdmin">
      <Posts/>
      <Sidebar/>
    </div>
    </>

  )
}
