import React from 'react';
import { BaseNode } from "./abstraction/base-node"
// import "../../../css/node.css"


export const AdditionalDestinationNode = ({
    className,
    // onClick,
    ...props
}) => (
        // onClick={onClick}
        <BaseNode className={className + " node node-additional-destestination"} {...props}>
        </BaseNode>
    )