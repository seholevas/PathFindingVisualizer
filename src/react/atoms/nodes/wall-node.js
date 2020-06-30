import {BaseNode} from "./abstraction/base-node";
import React from 'react';
// import "../../../css/node.css";
export const WallNode = ({
    className,
    // onClick,
    ...props
}) =>(
    // onClick={onClick}
    <BaseNode className={className+ " node node-wall"} {...props}>
    </BaseNode>
)