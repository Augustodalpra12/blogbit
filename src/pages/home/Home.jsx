import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import NavBar from "../../components/navbar/NavBar"
import { useParams } from "react-router";


export default function Home() {
  let { category } = useParams();

  return (
    <>
    <NavBar/>
    <Header/>
    <div className="homeAdmin">
      <Posts category={category}/>
      <Sidebar/>
    </div>
    </>

  )
}
