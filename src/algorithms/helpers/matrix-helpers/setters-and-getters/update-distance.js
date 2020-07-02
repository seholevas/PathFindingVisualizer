export function updateDistance(prev_value, node_location, adjacency_matrix) {
    let row = node_location[0];
    let column = node_location[1];
    if (prev_value < adjacency_matrix[row][column])
        adjacency_matrix[row][column] = prev_value + 1;
}