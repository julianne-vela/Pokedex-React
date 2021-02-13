import React, { Component } from 'react'
import RadioFilter from './RadioFilter';
import SearchBar from './SearchBar'
import SortMenu from './SortMenu.js';

export default class SideBar extends Component {
    render() {
        const {
            pokeData,
            searchQuery,
            handleQueryChange,
            sortBy,
            sortOrder,
            handleSortBy,
            sortAscending,
            sortDescending,
            radioFilterSelected,
            handleRadioChange,
        } = this.props

        return (
            <aside className='sidebar float'>
                <p className='label'>Search by Pokemon</p>
                <SearchBar className='searchBar'
                    searchQuery={searchQuery}
                    handleChange={handleQueryChange}
                />
                <p className='label'>Sort</p>
                <SortMenu className='sortMenu'
                    pokeData={pokeData}
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    handleSortBy={handleSortBy}
                    sortAscending={sortAscending}
                    sortDescending={sortDescending}
                />
                <p className='label'>Filter By</p>
                <RadioFilter className='radio'
                    radioFilterSelected={radioFilterSelected}
                    handleRadioChange={handleRadioChange}
                />
            </aside>
        )
    }
}
