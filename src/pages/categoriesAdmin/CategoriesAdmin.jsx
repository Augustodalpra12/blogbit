import Header from "../../components/header/Header"
import NavBarAdmin from "../../components/navbarAdmin/NavBarAdmin"
import Posts from "../../components/posts/Posts"
import SearchBar from "../../components/searchbar/SearchBar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./categoriesAdmin.css"


export default function CategoriesAdmin() {
  return (
    <div>
        <>
        <NavBarAdmin/>
        <Header/>
        <div className="searchBar"> 
        <SearchBar></SearchBar>
        </div>
        <div className="categories">
        <Posts></Posts>
        <Sidebar></Sidebar>
        </div>
        


        </>

      
    </div>
  )
}
