import React, { Component } from 'react'

export default class SortMenu extends Component {

    render() {
        const {
            handleChange,
            typeOptions,
            filterOption,
        } = this.props

        const options = typeOptions.map(option => <option value={option.value} key={option}>{option}</option>)


        return (
            <>
                <label className='sortMenu'>
                    {filterOption}
                    <select className='filter'
                        onChange={handleChange}
                    >
                        <option value='all'>All</option>
                        {options}
                    </select>
                </label>
            </>
        )
    }
}
