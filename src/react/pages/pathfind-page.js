import React, { Component } from 'react'
import Grid from '../modules/grid'
import Card from '../atoms/holders/card'
import Controls from '../modules/controls'

export default class PathFindPage extends Component {
    render() {
        return (
            <Card>
            <Grid></Grid>
            <Controls></Controls>
          </Card>
        )
    }
}
