import React from 'react';
import { BaseCTA } from "../abstractions/base-call-to-action";

export const ButtonCTA = ({
    className,
    onClick,
    ...props
}) =>(
    <BaseCTA className={"btn btn-primary " + className} onClick={onClick}{...props}>
    </BaseCTA>
)