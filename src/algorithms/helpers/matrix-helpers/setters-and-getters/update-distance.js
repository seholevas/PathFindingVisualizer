export function updateDistance(value, node_location, adjacency_matrix=[[]]) {
    let row = node_location[0];
    let column = node_location[1];
    // let value = 1;

    // if(weights[node_location] !== undefined)
    // {
    //     value += 4
    // }


    // if (prev_value < adjacency_matrix[row][column])
        // adjacency_matrix[row][column] = prev_value + value;
        adjacency_matrix[row][column] = value;

}

