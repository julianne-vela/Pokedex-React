import React, { Component } from 'react'
import SearchBar from './SearchBar'
// import Sort from './Sort.js';

export default class SideBar extends Component {
    render() {
        const {
            searchQuery,
            // sortBy,
            handleChange,
            // handleFilterChange
        } = this.props

        console.log(searchQuery);
        return (
            <>
                <SearchBar
                    searchQuery={searchQuery}
                    handleChange={handleChange}
                />
                {/* <Sort
                    sortBy={sortBy}
                    handleChange={handleFilterChange}
                /> */}
            </>
        )
    }
}
