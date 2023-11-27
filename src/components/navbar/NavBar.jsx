import { Link } from "react-router-dom"
import "./navbar.css"

export default function NavBar() {
  return (
    <div className='nav'>
       <div className="navLeft">
       <ul className="navList">
            <li className="navItem">
              <Link className="link" to="/">
                BIT
              </Link>
            </li>
            <li className="navItem">CATEGORIAS</li>
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
