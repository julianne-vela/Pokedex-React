import React, { Component } from 'react'
import './SearchBar.css';

export default class SearchBar extends Component {
    render() {
        const {
            searchValue,
            handleChange
        } = this.props

        return (
            <aside className='searchBar'>
                <label className='searchLabel'>Search Pokedex</label>
                <input className='searchInput'
                    placeholder='Char...'
                    value={searchValue}
                    onChange={handleChange}
                />
            </aside>
        )
    }
}
