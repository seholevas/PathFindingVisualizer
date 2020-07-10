import {BaseNode} from "./abstraction/base-node";
import React from 'react';
// import "../../../css/node.css";
export const WallNode = ({
    className,
    onClick,
    ...props
}) =>(
    <BaseNode className={"node node-wall "+ className} onClick={onClick}{...props}>
    </BaseNode>
)