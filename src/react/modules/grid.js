import React from 'react'
import { useSelector } from 'react-redux';
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
    return grid.map((value, row_index) =>
        <div>
            {grid.map((val, column_index) =>
<div className={"grid-row-" + row_index + " grid-column-" + column_index}>{`${value[column_index]['type']}`}
            </div>    
            )}
        </div>
    )
    //  <div className={"grid-row" + index} key={value}>{value[1]["type"]}</div> 
    /* <div className="grid-row" key={index}>{`${value[index]["type"]}`}</div> */

}





// export default class Grid extends Component {

//     render() {
//         // selector = getGridSelector();
//     const grid = useSelector(state => state.grid)
//     return <div></div>
//         // return selector.map((val, idx) =>
//         //     <div className="array-bar" key={idx} style={{ height: `${val}px` }}>
//         //         <p>{val}</p>
//         //     </div>
//         // )
//     }
// }
