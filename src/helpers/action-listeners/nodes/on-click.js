import { getValueByElementId } from "../../dom-helpers/get-values";
import { dispatchedMovedStart, dispatchedMovedEnd, dispatchedAddedAdditionalDestination, dispatchedAddedWall, dispatchedRemovedAdditionalDestination, dispatchedRemovedWall, dispatchedRemovedWeight, dispatchedAddedWeight } from "../../../redux/dispatchs/node-dispatchs";
import store from "../../../redux/stores/store";
import { dispatchedChangedNodeType } from "../../../redux/dispatchs/grid-dispatchs";
import shallowCopy from "../../2d-array-functions/shallow-copy";

export default function nodeClicked(id='')
{
    let coordinates = _getIdCoordinates(id);
    let grid = store.getState().grid;
    let selected_node_type = _getUserUpdatedNodeType();
    let node = _getNode(id);
    if(node['type'] !== selected_node_type)
    {
        if(!(node["type"] === "start_node" || node["type"] === "end_node") && !(selected_node_type === "start_node" || selected_node_type === "end_node"))
        {
            grid[coordinates[0]][coordinates[1]] = _create_node(selected_node_type);
            _removeNodeFromReducer(node["type"], coordinates);            
            _addNodeToReducer(selected_node_type, coordinates);

        }
        // else if((selected_node_type === "node_start" ||  selected_node_type === "node_end") || )
        else if(selected_node_type === "start_node")
        {
            let start = store.getState().nodes.start_coordinates;
            grid[start[0]][start[1]] = _create_node("empty_node");
            grid[coordinates[0]][coordinates[1]] = _create_node(selected_node_type);
            
            _removeNodeFromReducer(node["type"], coordinates);
            _addNodeToReducer(selected_node_type, coordinates);
            // _removeNodeFromReducer()
        }
        else if(selected_node_type === "end_node")
        {
            let end = store.getState().nodes.end_coordinates;
            grid[end[0]][end[1]] = _create_node("empty_node");
            grid[coordinates[0]][coordinates[1]] = _create_node(selected_node_type);
            _removeNodeFromReducer(node["type"], coordinates);
            _addNodeToReducer(selected_node_type, coordinates);

        }

        const copy = shallowCopy(grid);
        dispatchedChangedNodeType(copy);
        
        // else if(node)
    }
    
}

function _addNodeToReducer(node_type, coordinates)
{
    // let node_reducer = store.getState().nodes;
    switch(node_type)
    {
        case "start_node":
            dispatchedMovedStart(coordinates);
            break;
        case "end_node":
            dispatchedMovedEnd(coordinates);
            break;
        case "additional_destination_node":
            dispatchedAddedAdditionalDestination(coordinates)
            break;
        case "wall_node":
            dispatchedAddedWall(coordinates)
            break;
        case "weight_node":
            dispatchedAddedWeight(coordinates)
            break;
        default:
            // alert("something went wrong, hold on!");
            break;
    }
}


function _removeNodeFromReducer(node_type, coordinates)
{
    switch(node_type)
    {
        case "additional_destination_node":
            dispatchedRemovedAdditionalDestination(coordinates)
            break;
        case "wall_node":
            dispatchedRemovedWall(coordinates)
            break;
        case "weight_node":
            dispatchedRemovedWeight(coordinates)
            break;
        default:
            // alert("something went wrong, hold on!");
            break;
    }
}

function _getIdCoordinates(id = "") {
    let str_coordinates = id.split("-");
    let row = parseInt(str_coordinates[0]);
    let column = parseInt(str_coordinates[1]);
    return [row, column];
}


function _getNode(id) {
    const coordinates = _getIdCoordinates(id);
    const grid = store.getState().grid
    let node = grid[coordinates[0]][coordinates[1]];
    return node;
}

function _getUserUpdatedNodeType()
{
    return getValueByElementId("node-types");
}

function _create_node(type)
{
    return {
        type: type,
        visited: false,
        shortest_path: false 
    }
}