import React from 'react';
import { BaseNode } from "./abstraction/base-node"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStreetView} from "@fortawesome/free-solid-svg-icons";

library.add(faStreetView);
// import "../../../css/node.css"


export const AdditionalDestinationNode = ({
    className,
    onClick,
    ...props
}) => (
        <BaseNode className={"node node-additional-destestination " + className} onClick={onClick}{...props}>
        {/* <div> */}
        <FontAwesomeIcon icon="street-view" />
        {/* </div> */}
        </BaseNode>
    )