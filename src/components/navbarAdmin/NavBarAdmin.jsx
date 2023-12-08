import "./navbarAdmin.css"
import { Link } from "react-router-dom"

export default function NavBarAdmin() {
  return (
    <div className='nav'>
       <div className="navLeft">
       <ul className="navList">
            <li className="navItem">
            <Link to="/" className="link">
            logo
            <img className="bitImage" src={process.env.PUBLIC_URL + '/assets/bitmini.jpg'} alt="Logo" />
            </Link>
            </li>
            <Link className="link" to="/categorias/">
            <li className="navItem">CATEGORIAS</li>
            </Link>
            <li className="navItem">
            <Link to="/admin/novo-post" className="link">NOVO POST</Link>
            </li>
        </ul>
       </div>

       <div className="navRight">

       <a href="https://www.instagram.com/bit.empresajunior/" target="_blank" rel="noopener noreferrer">
        <i className="navIcons fa-brands fa-instagram"></i>
       </a>
       <a href="https://www.linkedin.com/company/bitej/?originalSubdomain=br" target="_blank" rel="noopener noreferrer">
       <i className="navIcons fa-brands fa-linkedin"></i>
       </a>
       </div>
    </div>
  )
}
