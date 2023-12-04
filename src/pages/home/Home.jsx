import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import NavBar from "../../components/navbar/NavBar"

export default function Home() {
  return (
    <>
    <NavBar/>
    <Header/>
    <div className="home">
      <Posts/>
      <Sidebar/>
    </div>
    </>

  )
}
