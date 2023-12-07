import "./sidebar.css"
import React, { useEffect, useState } from "react"

export default function Sidebar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/api/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    })

  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">Sobre a Empresa</span>
        <p className="sidebarP">Somos uma pequena empresa júnior localizada na UNIOESTE de Cascavel (PR). Todos participantes da empresa são alunos do curso de ciência da computação, e contando com  o auxílio de um de nossos professores, o objetivo da BIT é o desenvolvimento de sistemas que satisfaçam todas as vontades do cliente e dê aos nossos desenvolvedores experiência no mercado de trabalho.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Categorias</span>
        <ul className="sidebarList">
            {categories.map((category) => {
                return <li className="sidebarListItem" onClick={() => {
                    window.location.href = `/categorias/${category}`
                }}>{category}</li>
            })}
        </ul>
        </div>
    </div>
   
  )
}
