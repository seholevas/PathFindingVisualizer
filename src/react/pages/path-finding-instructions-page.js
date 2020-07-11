import React, { Component } from 'react'
import Card from '../atoms/holders/card'
import MasterCTA from '../atoms/controls/call-to-actions/abstractions/master-call-to-action';
import "../../css/text.css"
import "../../css/image.css"
import "../../css/grid.css"
import "../../css/flex.css"



export default class PathFindingInstructionsPage extends Component {
    render() {
        return (
            <Card className={"grid"}>
                <div className={"flex row text-block"}>
                    <h1>Path Finding Algorithm Visualizer</h1>
                </div>

                <div className={"flex row text-block"}>
                    <h2>What is a path finding algorithm?</h2>
                </div>
                <div className={"flex row img center"}><img src={require('../../images/pathfinding.png')} /></div>
                <div className={"flex row text-block"}>
                    <p>Imagine you are a driver at a ride-share company who is requested to pick someone up. You wouldn't want to be driving in circles trying to get there, would you? You would waste so much time and gas!</p>
                </div>
                <div className={"flex row text-block"}>
                    <p>At its core, a pathfinding algorithm seeks to find the shortest path between two points. This application visualizes various pathfinding algorithms in action, and more!</p>
                </div>
                <div className={"flex row text-block"}>
                    <p>
                        Afterall, algorithm is just a list of steps to solve a problem.
                        </p>
                </div>

                <div className={"flex row"}>
                    <MasterCTA type={"button"} onClick={async () => { await this.props.history.push("/PathFindingVisualizer/Play"); }}>Skip</MasterCTA>
                    <MasterCTA type={"button"}>Previous</MasterCTA>
                    <MasterCTA type={"button"} onClick={async () => { await this.props.history.push("/PathFindingVisualizer/Algorithms") }}>Next</MasterCTA>
                </div>
            </Card>
        )
    }
}
