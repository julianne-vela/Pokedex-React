import React, { Component } from 'react'

export default class SortMenu extends Component {

    render() {
        const {
            handleSortBy,
            sortAscending,
            sortDescending,
        } = this.props

        const sortOptions = ['Pokemon', 'Type', 'HP', 'Attack', 'Defense']

        const options = sortOptions.map(option => <option value={option.value} key={option}>{option}</option>)

        return (
            <>
                <select className='sortMenu'
                    onChange={handleSortBy}
                >
                    {options}
                </select>

                <button className='sortBtn' onClick={(e) => sortAscending}>Ascending</button>
                <button className='sortBtn' onClick={(e) => sortDescending}>Decending</button>
            </>
        )
    }
}
