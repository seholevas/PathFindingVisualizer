export function updateDistance(prev_value, node_location, adjacency_matrix=[[]], weights = []) {
    let row = node_location[0];
    let column = node_location[1];
    let value = 1;

    for(let i = 0; i < weights.length; i++)
    {
        if((weights[i][0] === node_location[0])&&(weights[i][1] === node_location[1]))
        {
            // value += 15;
            break;
        }
    }


    if (prev_value < adjacency_matrix[row][column])
        adjacency_matrix[row][column] = prev_value + value;
}