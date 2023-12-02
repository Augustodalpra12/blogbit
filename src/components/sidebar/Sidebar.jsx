import "./sidebar.css"
import React, { useEffect, useState } from "react";


export default function Sidebar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/api/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    })

  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">Sobre a Empresa</span>
        <p className="sidebarP">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, consequatur recusandae. Aperiam recusandae numquam distinctio! Temporibus provident quos vitae. Corporis et aliquam quidem numquam placeat molestiae impedit provident nemo? Veritatis.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Categorias</span>
        <ul className="sidebarList">
            {categories.map((category) => {
                return <li className="sidebarListItem">{category}</li>
            })}
        </ul>
        </div>
    </div>
   
  )
}
