import "./searchBar.css"
import React from 'react';

import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const {value} = event?.target;
        
        navigate('/categorias/' + value, {replace: true})
    };

    const parts = window.location.pathname.split('/');

    const cat = parts[parts.length - 1];
  
    return (
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Digite sua busca..."
          onChange={handleInputChange}
          value={cat}
          className="search-input"
        />
      </div>
    );
  }
