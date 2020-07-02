import shallowCopy from "../2d-array-functions/shallow-copy";
export default function updateNodeState(coordinates=[], matrix = [[]])
{
    let node = matrix[coordinates[0]][coordinates[1]];
    if(node["visited"] === false)
    {
        node["visited"] = true
    }
    else if (node["shortest_path"] === false)
    {
        // node["visited"] = false;
        node["shortest_path"] = true;
    }

    matrix[coordinates[0]][coordinates[1]] = node;
    return shallowCopy(matrix);
}