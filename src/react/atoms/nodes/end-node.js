import React from 'react';
import { BaseNode } from "./abstraction/base-node"
// import "../../../css/node.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag} from "@fortawesome/free-solid-svg-icons";

library.add(faFlag);
export const EndNode = ({
    className,
    onClick,
    ...props
}) => (
        <BaseNode className={className + " node node-end"} onClick={onClick}{...props}>
        <FontAwesomeIcon icon="flag" />
        </BaseNode>
    )