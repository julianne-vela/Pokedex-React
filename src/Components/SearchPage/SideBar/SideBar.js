import React, { Component } from 'react'
import RadioFilter from './RadioFilter';
import SearchBar from './SearchBar'
import SortMenu from './SortMenu.js';

export default class SideBar extends Component {
    render() {
        const {
            searchValue,
            handleQueryChange,
            handleSortBy,
            handleSortOrder,
            sortFunction,
            sortBtnHandler,
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
                    handleSortBy={handleSortBy}
                    handleSortOrder={handleSortOrder}
                    sortFunction={sortFunction}
                    sortBtnHandler={sortBtnHandler}
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
