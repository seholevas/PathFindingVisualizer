import store from "../../redux/stores/store";
import { dispatchedChangedNodeType } from "../../redux/dispatchs/grid-dispatchs";
import shallowCopy from "../2d-array-functions/shallow-copy";

let node = null
let prev_coordinates = null;
let temp_node = null;


function _getIdCoordinates(id = "") {
    let str_coordinates = id.split("-");
    let row = parseInt(str_coordinates[0]);
    let column = parseInt(str_coordinates[1]);
    return [row, column];
}
function _updatePrevCoordinates(id = "") {
    prev_coordinates = _getIdCoordinates(id);
}

function _updatePressedNodeCoordinates(id) {
    const coordinates = _getIdCoordinates(id);
    const grid = store.getState().grid
    node = grid[coordinates[0]][coordinates[1]];
}

export function grabItem(id) {
    _updatePrevCoordinates(id);
    _updatePressedNodeCoordinates(id);
}

export function holdingItem(id) {
    if(node !==null)
    {
        const coordinates = _getIdCoordinates(id);
        let grid = null;
        if (node !== null) {
            grid = store.getState().grid;
            temp_node = grid[coordinates[0]][coordinates[1]];
        }
    
        if (node != null && (temp_node["type"] !== "start_node" || temp_node["type"] !== "end_node" || temp_node["additional_destination_node"])) {
            grid[coordinates[0]][coordinates[1]] = node;
            const copy = shallowCopy(grid);
            dispatchedChangedNodeType(copy);
        }
    }
    node = null;
   

    // _updatePrevCoordinates(id);
}

export function releaseItem(id) {

    console.log("id: ", id);
    // let str_coordinates = id.split("-");
    // let row = parseInt(str_coordinates[0]);
    // let column = parseInt(str_coordinates[1]);
    // let grid = store.getState().grid

    // // || node['type'] === "end_node"
    // if (node['type'] === "start_node") {
    //     // INITIAL_STATE[9][9] = { type: "end_node", visited: false, shortest_path: false}
    //     grid[prev_coordinates[0]][prev_coordinates[1]] = { type: "empty_node", visited: false, shortest_path: false };
    //     grid[row][column] = { type: "start_node", visited: false, shortest_path: false }
    // }
    // console.log("released at: ", id);
    // console.log("node released: ", node);
    // const copy = shallowCopy(grid);
    // dispatchedChangedNodeType(copy);
}








// export function grabItem(id) {
//     let str_coordinates = id.split("-");
//     console.log("grabbed at: ", str_coordinates)
//     let row = parseInt(str_coordinates[0]);
//     let column = parseInt(str_coordinates[1]);
//     prev_coordinates = [row, column];
//     let grid = store.getState().grid
//     node = grid[row][column];

// }

// export function holdingItem(id)
// {
//     let str_coordinates = id.split("-");
//     let row = parseInt(str_coordinates[0]);
//     let column = parseInt(str_coordinates[1]);
//     let grid = store.getState().grid

//     // || node['type'] === "end_node"
//     if (node['type'] === "start_node") {
//         // INITIAL_STATE[9][9] = { type: "end_node", visited: false, shortest_path: false}
//         grid[prev_coordinates[0]][prev_coordinates[1]] = { type: "empty_node", visited: false, shortest_path: false };
//         grid[row][column] = { type: "start_node", visited: false, shortest_path: false }
//     }
//     console.log("released at: ", id);
//     console.log("node released: ", node);
//     const copy = shallowCopy(grid);
//     dispatchedChangedNodeType(copy); 
// }

// export function releaseItem(id) {
//     let str_coordinates = id.split("-");
//     let row = parseInt(str_coordinates[0]);
//     let column = parseInt(str_coordinates[1]);
//     let grid = store.getState().grid

//     // || node['type'] === "end_node"
//     if (node['type'] === "start_node") {
//         // INITIAL_STATE[9][9] = { type: "end_node", visited: false, shortest_path: false}
//         grid[prev_coordinates[0]][prev_coordinates[1]] = { type: "empty_node", visited: false, shortest_path: false };
//         grid[row][column] = { type: "start_node", visited: false, shortest_path: false }
//     }
//     console.log("released at: ", id);
//     console.log("node released: ", node);
//     const copy = shallowCopy(grid);
//     dispatchedChangedNodeType(copy);
// }




