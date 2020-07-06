import React from 'react';
import { BaseNode } from "./abstraction/base-node"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDotCircle} from "@fortawesome/free-solid-svg-icons";

library.add(faDotCircle);
// import "../../../css/node.css"


export const AdditionalDestinationNode = ({
    className,
    onClick,
    ...props
}) => (
        <BaseNode className={"node node-additional-destestination " + className} onClick={onClick}{...props}>
        {/* <div> */}
        <FontAwesomeIcon icon="dot-circle" />
        {/* </div> */}
        </BaseNode>
    )