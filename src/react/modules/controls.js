import React from 'react'
import MasterCTA from '../atoms/controls/call-to-actions/abstractions/master-call-to-action'
import startPathFinding from "../../algorithms/pathfind"
import { dispatchedStoppedSearch } from '../../redux/dispatchs/settings-dispatchs'
import { changeArraySize } from '../../helpers/state-functions/change-array-size'
import { clearMatrix } from '../../helpers/state-functions/clear-matrix'


export default function Controls() {
    return (
        <div className="grid">
            <div className={"flex row row-algorithms"} >
                <MasterCTA type={"select"} id={"algorithms"} onChange={() => { clearMatrix(); }}>
                    <option value="bfs">Breadth First Search</option>
                    <option value="dfs">Depth First Search</option>
                    <option value="dijkstra">Dijkstra's</option>
                    <option value="a*">A*</option>
                </MasterCTA>
            </div>

            <div className={"flex row row-node-types"}>
                <MasterCTA type={"select"} id={"node-types"} onChange={() => { }}>
                    <option value="additional_destination_node">Additional Destination Node</option>
                    {/* <option value="empty_node">Additional Destination Node</option> */}
                    <option value="wall_node">Wall Node</option>
                    <option value="weight_node">Weight Node</option>
                </MasterCTA>
            </div>

            <div className="flex row row-buttons">
                <MasterCTA type={"button"} onClick={() => { dispatchedStoppedSearch() }}>Stop</MasterCTA>
                <MasterCTA type={"button"} onClick={async () => {
                    await startPathFinding();            
                }}>Play</MasterCTA>
                <MasterCTA type={"button"} onClick={async() => { dispatchedStoppedSearch(); clearMatrix(); }}>Clear</MasterCTA>

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
