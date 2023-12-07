import Header from "../../components/header/Header"
import NavBar from "../../components/navbar/NavBar"
import Posts from "../../components/posts/Posts"
import SearchBar from "../../components/searchbar/SearchBar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./categories.css"

import { useParams } from "react-router"

export default function Categories() {

  return (
    <div>
        <>
        <NavBar/>
        <Header/>
        <div className="searchBar"> 
          <SearchBar></SearchBar>
        </div>
        <div className="categories">
          <Posts {...useParams()} ></Posts>
          <Sidebar></Sidebar>
        </div>
        </>
    </div>
  )
}
