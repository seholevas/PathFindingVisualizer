export function updateParent(parent_node_location, child_node_location, parent_matrix) {
    let row = child_node_location[0]
    let column = child_node_location[1]
    parent_matrix[row][column] = parent_node_location
}