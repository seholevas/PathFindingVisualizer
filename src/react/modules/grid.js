import React from 'react'
import { useSelector } from 'react-redux';
import MasterNode from "../atoms/nodes/abstraction/master-node-list"
import '../../css/grid-visualizer.css'
import "../../css/node.css"
// import Node from '../atoms/node';

export default function Grid() {
    // const selector = getGridSelector();
    const grid = useSelector(state => state.grid)
    // console.log("grid: ", grid)

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            console.log(grid[row][col]['type'])
            // return <div className={"grid-row" + (row) + " "+ col} key={row+ " "+ col}></div>

        }
    }


    
    return <div className="grid visualizer">
    {grid.map((value, row_index) =>
    
            {return grid.map((val, column_index) => 

                // `form-control round-lg ${this.state.valid ? '' : 'error'}`
            <MasterNode key={`node-${row_index}-${column_index}`} id={`node-${row_index}-${column_index}`} className={`grid-item visited-${value[column_index]['visited']}` } type={value[column_index]['type']}>
                {value[column_index]['type']}
                </MasterNode>
            
            )}
    )}
    </div> 

}