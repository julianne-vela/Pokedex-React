import React, { Component } from 'react'
import RadioFilter from './RadioFilter';
import SearchBar from './SearchBar'
import SortMenu from './SortMenu.js';

export default class SideBar extends Component {
    render() {
        const {
            searchValue,
            handleQueryChange,
            sortByValues,
            sortSelected,
            handleSortSelected,
            sortAsc,
            sortDesc,
            // handleSortOrder,
            // sortAndUpdate,
            radioFilterSelected,
            handleRadioChange,
        } = this.props

        return (
            <aside className='sidebar float'>
                {/* search bar */}
                <p className='label'>Search by Pokemon</p>
                <SearchBar className='searchBar'
                    searchValue={searchValue}
                    handleChange={handleQueryChange}
                />

                {/* Sort menu */}
                <p className='label'>Sort</p>
                <SortMenu className='sortMenu'
                    sortByValues={sortByValues}
                    sortSelected={sortSelected}
                    handleSortSelected={handleSortSelected}
                    sortAsc={sortAsc}
                    sortDesc={sortDesc}
                // handleSortOrder={handleSortOrder}
                // sortAndUpdate={sortAndUpdate}
                />

                {/* Radio Filters */}
                <p className='label'>Filter By</p>
                <RadioFilter className='radioFilter'
                    radioFilterSelected={radioFilterSelected}
                    handleRadioChange={handleRadioChange}
                />
            </aside>
        )
    }
}
