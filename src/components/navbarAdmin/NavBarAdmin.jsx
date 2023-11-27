import "./navbarAdmin.css"
import { Link } from "react-router-dom"

export default function NavBarAdmin() {
  return (
    <div className='nav'>
       <div className="navLeft">
       <ul className="navList">
            <li className="navItem">
            <Link to="/" className="link">BIT</Link>
            </li>
            <li className="navItem">CATEGORIAS</li>
            <li className="navItem">
            <Link to="/admin/novo-post" className="link">NOVO POST</Link>
            </li>
        </ul>
       </div>
       <div className="navCenter">
       <i className="searchIcon fa-solid fa-magnifying-glass"></i>
       </div>
       <div className="navRight">

       <i className="navIcons fa-brands fa-instagram"></i>
       <i className="navIcons fa-brands fa-linkedin"></i>
       </div>
    </div>
  )
}
