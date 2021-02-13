import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SortMenu from './SortMenu.js';

export default class SideBar extends Component {
    render() {
        const {
            searchQuery,
            typeOptions,
            handleQueryChange,
            handleTypeChange,
            filterSelected
        } = this.props

        return (
            <aside className='sidebar float'>
                <p className='label'>Search by Pokemon</p>
                <SearchBar className='searchBar'
                    searchQuery={searchQuery}
                    handleChange={handleQueryChange}
                />
                <p className='label'>Filter By: </p>
                <SortMenu className='sortMenu'
                    typeOptions={typeOptions}
                    filterOption='Type: '
                    handleChange={handleTypeChange}
                    filterSelected={filterSelected}
                />
            </aside>
        )
    }
}
