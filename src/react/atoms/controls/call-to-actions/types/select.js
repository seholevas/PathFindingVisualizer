import React from 'react'
import { BaseCTA } from "../abstractions/base-call-to-action";

export const SelectCTA = ({
    className,
    onChange = () => { alert("onChange is not set!") },
    ...props
}) => (
        <BaseCTA tag="select" className={"select "+ className} onChange={onChange}{...props}>
            <option value="bfs">Breadth First Search</option>
            <option value="dfs">Depth First Search</option>
            <option value="dijkstra">Dijkstra's</option>
            <option value="a*">A*</option>
        </BaseCTA>
    )