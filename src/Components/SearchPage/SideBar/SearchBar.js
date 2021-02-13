import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        const {
            searchQuery,
            handleChange
        } = this.props

        return (
            <input placeholder='Search by Name'
                value={searchQuery}
                onChange={handleChange}
            />
        )
    }
}
