import React, { Component } from 'react'
import './EventList.css'

export default class EventList extends Component {
    render() {
        return (
            <div>
                <table className='table'>
                    <tr>
                        <th className='date'>Date</th>
                        <th>Venue</th>
                        <th className='location'>Location</th>
                        <th><button className='button'>Tickets</button></th>
                    </tr>
                </table>
                <hr/>
            </div>
        );
    }
}
