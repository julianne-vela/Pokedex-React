import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        const {
            searchValue,
            handleChange
        } = this.props

        return (
            <input placeholder='Search by Name'
                value={searchValue}
                onChange={handleChange}
            />
        )
    }
}
