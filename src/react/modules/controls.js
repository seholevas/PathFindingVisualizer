import React from 'react'
import MasterCTA from '../atoms/controls/call-to-actions/abstractions/master-call-to-action'
import startPathFinding from "../../algorithms/pathfind"
export default function Controls() {
    return (
        <div className="grid">
            <div className={"flex row row-algorithms"} >
                <MasterCTA type={"select"} id={"algorithms"}onChange={() => { }}></MasterCTA>
            </div>

            <div className="flex row row-buttons">
                <MasterCTA type={"button"} onClick={() => { }}>Stop</MasterCTA>
                <MasterCTA type={"button"} onClick={async () => {startPathFinding();}}>Play</MasterCTA>
                <MasterCTA type={"button"} onClick={() => { }}>Clear</MasterCTA>

            </div>

            <div className="flex row row-sliders">
                <div>
                    Size
                <MasterCTA type={"slider"} onChange={() => { }}></MasterCTA>
                </div>
                <div>
                    Speed
                <MasterCTA type={"slider"} onChange={() => { }}></MasterCTA>
                </div>
            </div>
        </div>
    )
}
