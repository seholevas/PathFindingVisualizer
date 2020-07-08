import React from 'react'
import MasterCTA from '../atoms/controls/call-to-actions/abstractions/master-call-to-action'
import startPathFinding from "../../algorithms/pathfind"
import { dispatchedStoppedSearch } from '../../redux/dispatchs/settings-dispatchs'
import { changeArraySize } from '../../helpers/state-functions/change-array-size'
import { clearMatrix } from '../../helpers/state-functions/clear-matrix'
import "../../css/choicebox.css"
import "../../css/button.css"
import "../../css/slider.css"
import "../../css/controls.css"

export default function Controls() {
    return (
        <div className="grid controls">
            <div className={"flex row row-algorithms"} >
                <MasterCTA type={"select"} id={"algorithms"} className="choicebox" onChange={() => { clearMatrix(); }}>
                    <option selected disabled>Select A Pathfinding Algorithm</option>
                    <option value="bfs">Breadth First Search</option>
                    <option value="dfs">Depth First Search</option>
                    <option value="dijkstra">Dijkstra's</option>
                    <option value="a*">A*</option>
                </MasterCTA>
            </div>

            <div className={"flex row row-node-types"}>
                <MasterCTA type={"select"} id={"node-types"} className="choicebox" onChange={() => { }}>
                    <option selected disabled>Add Items To The Grid</option>
                    <option value="additional_destination_node">Additional Destination Node</option>
                    {/* <option value="empty_node">Additional Destination Node</option> */}
                    <option value="empty_node">Empty Node</option>
                    <option value="end_node">End Node</option>
                    <option value="start_node">Start Node</option>
                    <option value="wall_node">Wall Node</option>
                    <option value="weight_node">Weight Node</option>
                </MasterCTA>
            </div>

            <div className="flex row row-buttons">
                <MasterCTA type={"button"} onClick={() => { dispatchedStoppedSearch(); clearMatrix(false); }}>Clear Path</MasterCTA>
                <MasterCTA type={"button"} onClick={async () => {
                    await startPathFinding();
                }}>Play</MasterCTA>
                <MasterCTA type={"button"} onClick={async () => { dispatchedStoppedSearch(); clearMatrix(true); }}>Clear All</MasterCTA>

            </div>

            <div className="flex row row-sliders">
                <div>
                    Size
                <MasterCTA type={"slider"} id={"size"} onChange={() => { changeArraySize(); }}></MasterCTA>
                </div>
                <div>
                    Speed
                <MasterCTA type={"slider"} id={"speed"} onChange={() => { }}></MasterCTA>
                </div>
            </div>
        </div>
    )
}
