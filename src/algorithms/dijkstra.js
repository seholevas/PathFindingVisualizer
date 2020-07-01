export default function* dijkstra(matrix = [[]], source = [2, 2], end = [0, 3]) {
    yield [...source]
    let adjacency_matrix = shallow_copy(matrix);
    let visited = shallow_copy(matrix);
    let parent_coordinates = shallow_copy(matrix);
    let coordinates = source;
    let queue = [];

    // setting all initial values for the source node within each data structure
    adjacency_matrix[source[0]][source[1]] = 0;
    coordinates = [source[0], source[1]];
    visited[source[0]][source[1]] = true;
    parent_coordinates[source[0]][source[1]] = null;
    queue.push(coordinates);


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (!isEqual(source, [row, col])) {
                parent_coordinates[row][col] = null;
                adjacency_matrix[row][col] = Infinity;
                visited[row][col] = false;
            }
        }
    }


    let found = false;
    while (!found) {
        coordinates = queue.shift();
        const generator = check_neighbors(coordinates, visited);
        let result = null;
        do {
            result = generator.next();
            var neighbors_coordinates = result.value;
            if (!result.done && !found) {
                update_distance(adjacency_matrix[coordinates[0]][coordinates[1]], neighbors_coordinates, adjacency_matrix);
                update_to_visited(neighbors_coordinates, visited);
                update_parent(coordinates, neighbors_coordinates, parent_coordinates);
                queue.push(neighbors_coordinates);
                found = isEqual(neighbors_coordinates, end);
                yield [...neighbors_coordinates];

            }
        }
        while (!result.done)
    }

    // yield visited;

    // yield parent_coordinates;

    // yield [...adjacency_matrix]

    

    let path = []
    let current = parent_coordinates[end[0]][end[1]]
    do {
        path.push(current);
        current = parent_coordinates[current[0]][current[1]];
    }
    while (current !== null)
    console.log("printing array")
    path = path.reverse();
    for(let i = 0; i < path.length; i++)
    {
        yield path[i];
    }
    yield[...end];

}

function update_distance(prev_value, node_location, adjacency_matrix) {
    // let prev_row = prev_node_location[0];
    // let prev_column = prev_node_location[1];
    let row = node_location[0];
    let column = node_location[1];
    if (prev_value < adjacency_matrix[row][column])
        adjacency_matrix[row][column] = prev_value + 1;
}

function isEqual(array1 = [], array2 = []) {
    if (array1.length !== array2.length)
        return false;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false
        }
    }
    return true;
}


function update_parent(parent_node_location, child_node_location, parent_coordinates) {
    let row = child_node_location[0]
    let column = child_node_location[1]
    parent_coordinates[row][column] = parent_node_location
}

function* check_neighbors(node_location, visited) {
    let row = node_location[0];
    let column = node_location[1];
    const RIGHT = column + 1;
    const LEFT = column - 1;
    const UP = row - 1;
    const DOWN = row + 1;

    if (RIGHT >= 0 && RIGHT < visited.length && !visited[row][RIGHT]) {
        yield [row, RIGHT];
    }
    if (LEFT >= 0 && !visited[row][LEFT]) {
        yield [row, LEFT];
    }

    if (UP >= 0 && !visited[UP][column]) {
        yield [UP, column];
    }
    if (DOWN >= 0 && DOWN < visited.length && !visited[DOWN][column]) {
        yield [DOWN, column];
    }

}

function update_to_visited(node_location, visited) {
    let row = node_location[0];
    let col = node_location[1];
    visited[row][col] = true;
}

function shallow_copy(array) {
    const temp = [];

    for (let i = 0; i < array.length; i++) {
        temp.push([...array[i]])
    }
    // console.log('temp: ', temp)
    return temp;
}