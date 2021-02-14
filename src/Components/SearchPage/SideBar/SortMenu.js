import React, { Component } from 'react'

export default class SortMenu extends Component {

    render() {
        const {
            handleSortBy,
            sortBtnHandler
        } = this.props

        const sortOptions = ['Pokemon', 'Type', 'HP', 'Attack', 'Defense']

        const options = sortOptions.map(option => <option value={option.value} key={option}>{option}</option>)

        return (
            <>
                {/* DropDown Sort By */}
                <select className='dropdown'
                    onChange={handleSortBy}>
                    {options}
                </select>

                {/* Sort Ascending/Descending Buttons */}
                <button className='sortBtn' value='ascending' onClick={sortBtnHandler}>Ascending</button>
                <button className='sortBtn' value='descending' onClick={sortBtnHandler}>Decending</button>
            </>
        )
    }
}
