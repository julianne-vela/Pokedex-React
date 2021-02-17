import React, { Component } from 'react'
import '../SideBar.css';

export default class SearchBar extends Component {
    render() {
        const {
            searchValue,
            handleChange
        } = this.props

        return (
            <div className='SearchBar'>
                <input className='searchInput'
                    placeholder='Char...'
                    value={searchValue}
                    onChange={handleChange}
                />
            </div>
        )
    }
}
