import "./searchBar.css"
import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    const handleSearch = () => {
      if (onSearch) {
        onSearch(query);
      }
    };
  
    return (
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Digite sua busca..."
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Buscar
        </button>
      </div>
    );
  }