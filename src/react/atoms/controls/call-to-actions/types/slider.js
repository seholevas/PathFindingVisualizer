import React from 'react'
import { BaseCTA } from "../abstractions/base-call-to-action";

export const RangedSliderCTA = ({
    // id,
    min = "5",
    max = "15",
    className,
    onChange,
    ...props
}) =>(
    <BaseCTA tag="input" type="range" className={"slider "+ className} min={min} max={max}  onChange={onChange}{...props}>
    </BaseCTA>
)