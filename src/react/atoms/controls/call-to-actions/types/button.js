import React from 'react';
import { BaseCTA } from "../abstractions/base-call-to-action";
import "../../../../ui-kit/custom/button.css";

export const ButtonCTA = ({
    className,
    onClick,
    ...props,
}) =>(
    <BaseCTA className={"btn btn-primary " + className} onClick={onClick}{...props}>
    </BaseCTA>
)