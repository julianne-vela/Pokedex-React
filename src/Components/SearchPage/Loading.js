import React, { Component } from 'react'
import loadingImg from '../../Assets/loading.svg';

export default class Loading extends Component {
    render() {
        return (
            <div className='pokeLoading'>
                <img alt='pokeballs spinning' src={loadingImg} />
            </div>
        )
    }
}
