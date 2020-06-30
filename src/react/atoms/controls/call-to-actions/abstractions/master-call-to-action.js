import React, { Component } from 'react'
import * as buttons from "../types/button"
import * as sliders from "../types/slider"
import { SelectCTA } from '../types/select'

const components = {
    button: buttons.ButtonCTA,
    slider: sliders.RangedSliderCTA,
    select: SelectCTA
}

export default class MasterCTA extends Component {
    render() {
        const {type, ...props} = this.props
        
        if(type === null)
        {
            return null
        }

        const Component = components[type]
        return (
            <Component {...props}>
            </Component>
            
        );
    }
}
