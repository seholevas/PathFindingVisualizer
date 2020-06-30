import React from 'react'
import { BaseCTA } from "../abstractions/base-call-to-action";
import "../../../../ui-kit/custom/slider.css"

export const RangedSliderCTA = ({
    // id,
    min = "1",
    max = "150",
    className,
    onChange,
    ...props,
}) =>(
    <BaseCTA tag="input" type="range" className={"slider "+ className} min={min} max={max}  onChange={onChange}{...props}>
    </BaseCTA>
)