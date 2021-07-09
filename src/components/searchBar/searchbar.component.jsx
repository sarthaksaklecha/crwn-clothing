import React from 'react';

import './searchBar.component.scss';


export const SearchBar = ({ handleChange }) => (
        <div className = 'search-bar'>
            <input required className = 'search-input' onChange={handleChange} placeholder='search' />
        </div> 
)