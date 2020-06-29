import React, { Component } from 'react'

// class for each node (or square) on the grid
export default class Node extends Component {


    render() {
        return (
            <div id={`node-${row}-${col}`} className={`node ${className}`} onMouseDown={() => onMouseDown(row, col)}
                onMouseEnter={() => onMouseEnter(row, col)}
                onMouseUp={() => onMouseUp()}>

            </div>
        )
    }
}
