import React, { Component } from 'react'
import Card from '../atoms/holders/card'
import MasterCTA from '../atoms/controls/call-to-actions/abstractions/master-call-to-action';
import { faStreetView, faCar, faSquare,faWeightHanging, faFlag} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import "../../css/text.css"
import "../../css/colors.css"
import "../../css/image.css"
import "../../css/grid.css"
import "../../css/flex.css"
library.add(faSquare);

export default class    ItemsInstructionsPage extends Component {
    render() {
        return (
            <Card className={"grid"}>
                    <div className={"flex row text-block"}>
                        <h1>Items</h1>
                    </div>

                    <div className={"flex row text-block"}>
                        <h2>Make Trickier To Get To The End</h2>
                    </div>
                    <div className={"flex row img center"}><img src={require('../../images/items.png')} /></div>
                    <div className={"flex row text-block"}>
                        <p>Here's the list of items you can use:</p>
                    </div>
                    
                    <div className={"flex row text-block"}>
                    </div>

                    <div className={"flex column text-block"}>
                    <ul>
                    <li><FontAwesomeIcon className="yellow" icon="square" /> / <FontAwesomeIcon className="orange" icon="square" /> <span> Visiting: </span> calculating the cost.</li>
                    <li><FontAwesomeIcon className="green" icon="square" /><span> Path: </span> part of the most efficient path.</li>
                    <li><FontAwesomeIcon icon="street-view" /><span> Additional Destination: </span> need to pick someone else up before you reach the end.</li>
                    <li><FontAwesomeIcon icon="square" /><span> Wall:</span> you cannot drive here, it is blocked off. </li>
                    <li><FontAwesomeIcon icon="weight-hanging" /><span> Weight: </span> heavy traffic, you will go through it only if it is faster than the other options.</li>
                    <li><FontAwesomeIcon icon="car" /><span> Start:</span> where you will always begin. </li>
                    <li><FontAwesomeIcon icon="flag" /><span> End:</span> where you will always end. </li>
                    </ul>
                    </div>

                    <div className={"flex row"}>
                        <MasterCTA type={"button"} onClick={async ()=>{await this.props.history.push("/PathFindingVisualizer/Play"); }}>Skip</MasterCTA>
                        <MasterCTA type={"button"} onClick={async()=>{await this.props.history.push("/PathFindingVisualizer/Algorithms")}}>Previous</MasterCTA>
                        <MasterCTA type={"button"} onClick={async ()=>{await this.props.history.push("/PathFindingVisualizer/Play")}}>Next</MasterCTA>
                    </div>
            </Card>
        )
    }
}



