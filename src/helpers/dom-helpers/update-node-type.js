import store from "../../redux/stores/store";
import { dispatchedChangedNodeType } from "../../redux/dispatchs/grid-dispatchs";
import shallowCopy from "../2d-array-functions/shallow-copy";
import { getValueByElementId } from "../functions/get-value-by-element-id";

export default function updateNodeType(id = "") {
    let node_type = getValueByElementId("node-types");
    let coordinates = id.split("-");
    let grid = store.getState().grid;
    let node = grid[coordinates[0]][coordinates[1]]

    if (node["type"] === node_type) {
        node["type"] = "empty_node";
    }
    else if (node["type"] !== "start_node" && node["type"] !== "end_node") {
        node["type"] = node_type;
    }

    grid[coordinates[0]][coordinates[1]] = node;
    const copy = shallowCopy(grid)
    dispatchedChangedNodeType(copy);
}