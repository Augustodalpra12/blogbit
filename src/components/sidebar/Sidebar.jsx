import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">Sobre a Empresa</span>
        <p className="sidebarP">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, consequatur recusandae. Aperiam recusandae numquam distinctio! Temporibus provident quos vitae. Corporis et aliquam quidem numquam placeat molestiae impedit provident nemo? Veritatis.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Categorias</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">WEB</li>
            <li className="sidebarListItem">DESKTOP</li>
            <li className="sidebarListItem">DISPOSITIVOS MOVEIS</li>
            <li className="sidebarListItem">EMBARCADOS</li>
        </ul>
        </div>
    </div>
   
  )
}
