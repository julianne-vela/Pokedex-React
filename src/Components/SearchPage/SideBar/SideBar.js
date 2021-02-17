import React, { Component } from 'react'
import './Filter/RadioFilter.css';
import './Search/SearchBar.css';
import './Sort/SortMenu.css';
import RadioFilter from './Filter/RadioFilter.js';
import SearchBar from './Search/SearchBar.js';
import SortMenu from './Sort/SortMenu.js';

export default class SideBar extends Component {
    render() {
        const {
            searchValue,
            handleQueryChange,
            sortByValues,
            sortSelected,
            handleSortSelected,
            sortOrder,
            sortAndUpdate,
            pokeTypes,
            radioSelected,
            handleRadioSelected,
        } = this.props

        return (
            <aside className='sidebar float'>
                {/* search bar */}
                <p className='menuLabel'>Search by Pokemon</p>
                <SearchBar className='searchBar'
                    searchValue={searchValue}
                    handleChange={handleQueryChange}
                />

                {/* Sort menu */}
                <p className='menuLabel'>Sort</p>
                <SortMenu className='sortMenu'
                    sortByValues={sortByValues}
                    sortSelected={sortSelected}
                    handleSortSelected={handleSortSelected}
                    sortOrder={sortOrder}
                    sortAndUpdate={sortAndUpdate}
                />

                {/* Radio Filters */}
                <p className='menuLabel'>Filter By</p>
                <RadioFilter className='radioFilter'
                    pokeTypes={pokeTypes}
                    radioSelected={radioSelected}
                    handleRadioSelected={handleRadioSelected}
                />
            </aside>
        )
    }
}
