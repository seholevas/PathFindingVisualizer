import React from 'react'
import { useSelector } from 'react-redux';
import MasterNode from "../atoms/nodes/abstraction/master-node-list"
import nodeClicked from "../../helpers/action-listeners/nodes/on-click"
import '../../css/grid-visualizer.css'
import "../../css/node.css"
// import { grabItem, releaseItem, holdingItem } from '../../helpers/action-listeners/on-mouse';

export default function Grid() {
// return <div></div>
    const grid = useSelector(state => state.grid)
    
    return <div className="grid visualizer">
    {grid.map((value, row_index) =>
    <div key={`row-${row_index}`}className={`row row-${row_index}`}>
            {grid.map((val, column_index) => 

            <MasterNode key={`${row_index}-${column_index}`} id={`${row_index}-${column_index}`} type={value[column_index]['type']} className={`flex-item visited-${value[column_index]['visited']} shortest-path-${value[column_index]['shortest_path']}`} onClick={()=>{nodeClicked(`${row_index}-${column_index}`)}}>
                
                </MasterNode>
            )}
            </div>
    )}
    
    </div> 

}