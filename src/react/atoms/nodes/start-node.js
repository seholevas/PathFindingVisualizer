import React from 'react';
import { BaseNode } from "./abstraction/base-node";
// import "../../../css/node.css";


export const StartNode = ({
    className,
    ...props
}) => (
        // onClick={onClick}
        <BaseNode className={className + " node node-start"} {...props}>
        </BaseNode>
    )