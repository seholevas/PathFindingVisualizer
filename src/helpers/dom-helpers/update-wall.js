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
    switch(node["type"])
    {
        case "weight_node":
        case "empty_node":
        case "additional_destination_node":
            node["type"] = "wall_node";
            break;
        case"wall_node":
            node["type"] = "empty_node";
            break;
        default:
            break;
    }

    grid[coordinates[0]][coordinates[1]] = node;
    const copy = shallowCopy(grid)
    dispatchedChangedNodeType(copy);
}