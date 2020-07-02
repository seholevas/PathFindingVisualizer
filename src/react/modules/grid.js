import React from 'react'
import { useSelector } from 'react-redux';
import MasterNode from "../atoms/nodes/abstraction/master-node-list"
import '../../css/grid-visualizer.css'
import "../../css/node.css"

export default function Grid() {
    // const selector = getGridSelector();
    const grid = useSelector(state => state.grid)
    // console.log("grid: ", grid)

    // for (let row = 0; row < grid.length; row++) {
    //     for (let col = 0; col < grid[row].length; col++) {
    //         console.log(grid[row][col]['type'])
    //         // return <div className={"grid-row" + (row) + " "+ col} key={row+ " "+ col}></div>

    //     }
    // }


    
    return <div className="grid visualizer">
    {grid.map((value, row_index) =>
    <div key={`row-${row_index}`}className={`row row-${row_index}`}>
            {grid.map((val, column_index) => 

                // `form-control round-lg ${this.state.valid ? '' : 'error'}`
            <MasterNode key={`${row_index}-${column_index}`} id={`${row_index}-${column_index}`} className={`flex-item visited-${value[column_index]['visited']} shortest-path-${value[column_index]['shortest_path']}` } type={value[column_index]['type']}>
                {`${row_index}-${column_index}`}
                </MasterNode>
            )}
            </div>
    )}
    
    </div> 

}