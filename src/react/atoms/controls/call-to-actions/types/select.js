import React from 'react'
import { BaseCTA } from "../abstractions/base-call-to-action";

export const SelectCTA = ({
    className,
    onChange = () => { alert("onChange is not set!") },
    ...props
}) => (
        <BaseCTA tag="select" className={"select "+ className} onChange={onChange}{...props}>
            
        </BaseCTA>
    )