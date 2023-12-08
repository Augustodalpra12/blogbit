import { Link } from "react-router-dom"
import "./navbar.css"

export default function NavBar() {
  return (
    <div className='nav'>
       <div className="navLeft">
       <ul className="navList">
            <li className="navItem">
              <Link className="link" to="/">
                
              <img className="bitImage" src={process.env.PUBLIC_URL + '/assets/bitmini.jpg'} alt="Logo" />
              </Link>
            </li>
            <Link className="link" to="/categorias/">
            <li className="navItemCategoria">CATEGORIAS</li>
            </Link>
            
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
