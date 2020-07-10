import React, { Component } from 'react'
import "../../../css/card.css"

export default class Card extends Component {
    render() {
        return (
            <div className={"card"}>
                {this.props.children}
            </div>
        )
    }
}
