import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h2>Artist Image from API (thumbnail) and Artist Name from API (use model)</h2>
                <h2 className='upcoming-events'>Upcoming Events (this stays hardcoded)</h2>
            </div>
        );
    }
}
