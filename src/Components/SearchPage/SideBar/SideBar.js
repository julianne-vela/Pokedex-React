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
            handlePerPage,
            handlePageNav,
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
                {/* Page Nav */}
                <PageNav className='pageNav'
                handlePerPage={handlePerPage}
                handlePageNav={handlePageNav}
                />

                {/* Search Bar */}
                <SearchBar className='searchBar'
                    searchValue={searchValue}
                    handleChange={handleQueryChange}
                />

                {/* Sort Menu */}
                <SortMenu className='sortMenu'
                    sortByValues={sortByValues}
                    sortSelected={sortSelected}
                    handleSortSelected={handleSortSelected}
                    sortOrder={sortOrder}
                    sortAndUpdate={sortAndUpdate}
                />

                {/* Radio Filters */}
                <RadioFilter className='radioFilter'
                    pokeTypes={pokeTypes}
                    radioSelected={radioSelected}
                    handleRadioSelected={handleRadioSelected}
                />
            </aside>
        )
    }
}
