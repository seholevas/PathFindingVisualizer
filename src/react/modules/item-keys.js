import React, { Component } from 'react'
import Card from '../atoms/holders/card'

export default class ItemKeys extends Component {
    render() {
        return (
            <Card>
            <h3>Key</h3>
            <ul>
                <li><FontAwesomeIcon className={"visited-true"} icon="square" />: Visiting To Calculate Distance - Like when your GPS is taking time to calculate the best route.</li>
                <li><FontAwesomeIcon className={"visited-true"} icon="square" />: Optimized Path - GPS has calculated the best route!</li>
                <li><FontAwesomeIcon icon="car" />: Your Starting Place</li>
                <li><FontAwesomeIcon icon="flag" />: The Ending Place</li>
                <li><FontAwesomeIcon icon="street-view" />: Additional Destination - You need to pickup another passenger before going to the end, like sharing a ride to the same place.</li>
                <li><FontAwesomeIcon icon="square" />: Wall - You cannot drive through this, it is blocked off!</li>
                <li><FontAwesomeIcon icon="weight-hanging" />: Weight - It takes more time to drive through this, imagine heavy traffic.</li>

            </ul>
            </Card>
        )
    }
}
