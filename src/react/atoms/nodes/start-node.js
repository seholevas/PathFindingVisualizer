import React from 'react';
import { BaseNode } from "./abstraction/base-node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCar} from "@fortawesome/free-solid-svg-icons";

library.add(faCar);


export const StartNode = ({
    className,
    onClick,
    ...props
}) => (
        <BaseNode className={className + " node node-start"} onClick={onClick} {...props}>
        <FontAwesomeIcon icon="car" />
        </BaseNode>
    )