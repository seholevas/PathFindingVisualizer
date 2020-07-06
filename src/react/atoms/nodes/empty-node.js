import React from 'react';
import {BaseNode} from "./abstraction/base-node"
// import "../../../css/node.css"

export const EmptyNode = ({
    className,
    onClick,
    ...props
}) =>(
    // onClick={onClick}
    // onClick={(event)=>{updateWeight(event.target.id); console.log("changed to weight node!: ", event.target.id);}} onDoubleClick={()=>{console.log("changed to additional destination node!")}} onMouseDown={()=> {console.log("mouse down!")}} onMouseMove={()=>{console.log("mouse moved!")}} onMouseUp={()=>{console.log("mouse up!")}}
    <BaseNode className={"node node-empty " + className} onClick={onClick} {...props}>
    </BaseNode>
)