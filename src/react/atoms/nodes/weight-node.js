import React from 'react';
import {BaseNode} from "./abstraction/base-node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWeightHanging} from "@fortawesome/free-solid-svg-icons";

library.add(faWeightHanging);

export const WeightNode = ({
    className,
    onClick,
    ...props
}) =>(
    <BaseNode className={"node node-weight "+ className} onClick={onClick}{...props}>
    <FontAwesomeIcon icon="weight-hanging" />
    </BaseNode>
)