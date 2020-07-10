import React from 'react'
import MasterCTA from '../atoms/controls/call-to-actions/abstractions/master-call-to-action'
import startPathFinding from "../../algorithms/pathfind"
import { dispatchedStoppedSearch } from '../../redux/dispatchs/settings-dispatchs'
import { changeArraySize } from '../../helpers/state-functions/change-array-size'
import { clearMatrix, clearPath, clearAll } from '../../helpers/state-functions/clear-matrix'
import "../../css/choicebox.css"
import "../../css/button.css"
import "../../css/slider.css"
import "../../css/controls.css"

export default function Controls() {
    return (
        <div className="grid controls">
            <div className={"flex row row-algorithms"} >
                <MasterCTA type={"select"} id={"algorithms"} className="choicebox" onChange={() => {dispatchedStoppedSearch();clearPath()}}>
                    <option value="a*">A*</option>
                    <option value="bfs">Breadth First Search</option>
                    <option value="dfs">Depth First Search</option>
                    <option value="dijkstra">Dijkstra's</option>
                </MasterCTA>
            </div>

            <div className={"flex row row-node-types"}>
                <MasterCTA type={"select"} id={"node-types"} className="choicebox" onChange={() => {dispatchedStoppedSearch(); clearPath()}}>
                    <option value="additional_destination_node">Add An Additional Destination</option>
                    <option value="empty_node">Remove An Item</option>
                    <option value="end_node">Move The Ending Place</option>
                    <option value="start_node">Move The Starting Place</option>
                    <option value="wall_node">Add A Wall Block</option>
                    <option value="weight_node">Add A Weight</option>
                </MasterCTA>
            </div>

            <div className="flex row row-buttons">
                <MasterCTA type={"button"} onClick={async () => {await dispatchedStoppedSearch(); await clearPath();}}>Clear Path</MasterCTA>
                <MasterCTA type={"button"} onClick={async () => {
                    await startPathFinding();
                }}>Play</MasterCTA>
                <MasterCTA type={"button"} onClick={async () => {await dispatchedStoppedSearch(); await clearAll()  }}>Clear All</MasterCTA>

            </div>

            <div className="flex row row-sliders">
                <div>
                    Size
                <MasterCTA type={"slider"} id={"size"} onChange={async () => { await dispatchedStoppedSearch(); await changeArraySize(); }}></MasterCTA>
                </div>
                <div>
                    Speed
                <MasterCTA type={"slider"} id={"speed"} onChange={() => { }}></MasterCTA>
                </div>
            </div>
        </div>
    )
}
