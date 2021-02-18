import React, { Component } from 'react'

export default class PageNav extends Component {
    render() {
        const {
            handlePageNav,
            handlePerPage,
        } = this.props

        return (
            <nav className='pageNav'>
                <label className='navLabel'>Results Per Page</label>
                <div className='navControls'>
                    <button className='navBtn' value='previous' onChange={handlePageNav}>Previous</button>
                    <select className='dropDown' onChange={handlePerPage}>
                        <option value='10'>10</option>
                        <option value='25'>25</option>
                        <option value='50'>50</option>
                        <option value='75'>75</option>
                        <option value='100'>100</option>
                    </select>
                    <button className='navBtn' value='next' onChange={handlePageNav}>Next</button>
                </div>
            </nav>
        )
    }
}
