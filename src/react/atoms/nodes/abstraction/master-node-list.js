import React, { Component } from 'react'
import { AdditionalDestinationNode } from '../additional-destination-node'
import { EndNode } from '../end-node'
import { EmptyNode } from '../empty-node'
import { WallNode } from '../wall-node'
import { WeightNode } from '../weight-node'
import { StartNode } from '../start-node'


const components = {
    additional_destination_node: AdditionalDestinationNode,
    empty_node: EmptyNode,
    end_node: EndNode,
    start_node: StartNode,
    wall_node: WallNode,
    weight_node: WeightNode
    
}

export default class MasterNode extends Component {
    render() {
        const { type, ...props } = this.props

        if (type === null) {
            return null
        }

        const Component = components[type]
        return (
            <Component {...props}>
            </Component>

        );
    }
}
