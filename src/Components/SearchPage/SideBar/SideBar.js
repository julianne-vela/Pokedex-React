import React, { Component } from 'react'
import './Filter/RadioFilter.css';
import './Search/SearchBar.css';
import './Sort/SortMenu.css';
import './PageNav/PageNav.css';
import RadioFilter from './Filter/RadioFilter.js';
import SearchBar from './Search/SearchBar.js';
import SortMenu from './Sort/SortMenu.js';
import PageNav from './PageNav/PageNav';

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
                {/* Search Bar */}
                <label className='menuLabel'>Search Pokedex</label>
                <SearchBar className='searchBar'
                    searchValue={searchValue}
                    handleChange={handleQueryChange}
                />

                {/* Page Nav */}
                <label className='menuLabel'>Results Per Page</label>
                <PageNav />

                {/* Sort Menu */}
                <p className='menuLabel'>Sort By: </p>
                <SortMenu className='sortMenu'
                    sortByValues={sortByValues}
                    sortSelected={sortSelected}
                    handleSortSelected={handleSortSelected}
                    sortOrder={sortOrder}
                    sortAndUpdate={sortAndUpdate}
                />

                {/* Radio Filters */}
                <p className='menuLabel'>Filter By Type</p>
                <RadioFilter className='radioFilter'
                    pokeTypes={pokeTypes}
                    radioSelected={radioSelected}
                    handleRadioSelected={handleRadioSelected}
                />
            </aside>
        )
    }
}
