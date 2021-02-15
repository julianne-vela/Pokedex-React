import React, { Component } from 'react'
import './HomePage.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className='welcome'>
                <h2>Welcome to Nessi's PokeDex!</h2>
                <p>
                    Click Search to start finding your favorite pokemon!
                </p>
                <p>
                    In the future, we plan to add the ability to save teams of pokemon to your profile so that you can reference back to them when planning your epic battles!
                </p>
            </div>
        )
    }
}
