import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        const {
            searchValue,
            handleChange
        } = this.props

        return (
            <input className='searchName'
                placeholder='Char...'
                value={searchValue}
                onChange={handleChange}
            />
        )
    }
}
