import React from 'react'
import MasterCTA from '../atoms/controls/cta/abstractions/master-call-to-action'

export default function Controls() {
    return (
        <div className="grid">
            <div className={"flex row row-algorithms"} >
                <MasterCTA type={"select"}></MasterCTA>
            </div>

            <div className="flex row row-buttons">
                <MasterCTA type={"button"}></MasterCTA>
            </div>

            <div className="flex row row-sliders">
                <MasterCTA type={"slider"}></MasterCTA>
            </div>
        </div>
    )
}
