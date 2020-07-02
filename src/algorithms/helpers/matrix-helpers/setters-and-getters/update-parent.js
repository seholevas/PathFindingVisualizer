export function updateParent(parent_node_location, child_node_location, parent_coordinates) {
    let row = child_node_location[0]
    let column = child_node_location[1]
    parent_coordinates[row][column] = parent_node_location
}