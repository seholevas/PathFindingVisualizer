import React, { Component } from 'react'
import Card from '../atoms/holders/card'
import MasterCTA from '../atoms/controls/call-to-actions/abstractions/master-call-to-action';
import "../../css/text.css"
import "../../css/image.css"
import "../../css/grid.css"
import "../../css/flex.css"

export default class AlgorithmsInstructionsPage extends Component {
    render() {
        return (
            <Card className={"grid"}>
                    <div className={"flex row text-block"}>
                        <h1>Say Hello To The Algorithms</h1>
                    </div>

                    <div className={"flex row text-block"}>
                        <h2>What are the algorithms involved?</h2>
                    </div>
                    <div className={"flex row img center"}><img src={require('../../images/algorithms.png')} /></div>
                    {/* <div className={"flex row text-block"}>
                        <p>Algorithm is just a fancy word for having thought out list of steps that you take in a specific order. For example, you wouldn't drive your car before you put in the keys, right? These are the algorithms that will help you figure out your path:</p>
                    </div> */}
                    
                    <div className={"flex row text-block"}>
                    </div>

                    <div className={"flex column text-block"}>
                    <ul>
                    <li><span>A* Search</span> (weighted): arguably the best algorithm; guarentee's the shortest path. </li>
                    <li><span>Dijkstra's Algorithm</span> (weighted): the father of algorithms; It will guarentee the shortest path. </li>
                    <li><span>Bredth First Search</span> (unweighted): dijkstra's carefree brother; gaurentee's the shortest path, but does not care about weights. </li>
                    <li><span>Depth First Search</span> (unweighted): the under achieving algorithm; It will not gaurentee the shortest path! </li>
                    </ul>
                    </div>

                    <div className={"flex row"}>
                        <MasterCTA type={"button"} onClick={async ()=>{await this.props.history.push("/Play"); }}>Skip</MasterCTA>
                        <MasterCTA type={"button"} onClick={async()=>{await this.props.history.push("/")}}>Previous</MasterCTA>
                        <MasterCTA type={"button"} onClick={async ()=>{await this.props.history.push("/Items")}}>Next</MasterCTA>
                    </div>
            </Card>
        )
    }
}