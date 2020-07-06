import store from "../../redux/stores/store";
import { dispatchedChangedNodeType } from "../../redux/dispatchs/grid-dispatchs";
import shallowCopy from "../2d-array-functions/shallow-copy";

export default function updateWeight(id="")
{
    let grid = store.getState().grid;
    let coordinates = id.split("-");
    console.log("coordinates: ",coordinates[0], coordinates[1]);
    let node = grid[coordinates[0]][coordinates[1]]
    console.log(node["type"])
    if(node["type"] === "empty_node")
    {
        node["type"] = "weight_node";
    }
    else if(node["type"] === "weight_node")
    {
        node["type"] = "empty_node";
    }

    grid[coordinates[0]][coordinates[1]] = node;
    const copy = shallowCopy(grid)
    dispatchedChangedNodeType(copy);
}