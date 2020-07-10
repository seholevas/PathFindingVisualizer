export default function* traverseShortestPath(end_node_coordinates = [], parent_coordinates_matrix = [[]]) {
    let path = []
    let row = end_node_coordinates[0];
    let column = end_node_coordinates[1]
    let current = parent_coordinates_matrix[row][column];

    do 
    {
        path.push(current);
        row = current[0]
        column = current[1]
        current = parent_coordinates_matrix[row][column];
    }
    while (current !== null)
    path = path.reverse();
    for (let i = 0; i < path.length; i++) {
        yield path[i];
    }
    yield [...end_node_coordinates];

}

