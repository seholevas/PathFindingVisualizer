// 1  function Dijkstra(Graph, source):
// 2
// 3      create vertex set Q
// 4
// 5      for each vertex v in Graph:             
// 6          dist[v] ← INFINITY                  
// 7          prev[v] ← UNDEFINED                 
// 8          add v to Q                      
// 10      dist[source] ← 0                        
// 11      
// 12      while Q is not empty:
// 13          u ← vertex in Q with min dist[u]    
// 14                                              
// 15          remove u from Q 
// 16          
// 17          for each neighbor v of u:           // only v that are still in Q
// 18              alt ← dist[u] + length(u, v)
// 19              if alt < dist[v]:               
// 20                  dist[v] ← alt 
// 21                  prev[v] ← u 
// 22
// 23      return dist[], prev[]

export default function* dijkstra(matrix = [[]], source = [0, 0], final = [0,3]) {
    let adjacency_matrix = [...matrix]
    let coordinates = source;
    let visited = [...matrix];
    let queue = []
    let path = [];
    // let distance = {}
    // let vertex_priority_queue = new 

    // let unvisited_nodes = new Array(matrix.length * matrix.length)
    // console.log("unvisited: ", unvisited_nodes);

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (source[0] === row && source[1] === col) {
                adjacency_matrix[row][col] = 0;
                coordinates = [row, col];
                visited[row][col] = true;
                queue.push(coordinates);
            }
            else {
                adjacency_matrix[row][col] = Infinity;
                visited[row][col] = false;
            }
            // console.log("visited: ", visited[row][col])
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
                queue.push(neighbors_coordinates);
                found = isEqual(neighbors_coordinates,final)
                yield neighbors_coordinates;
                
            }
        }
        while (!result.done)

        // found = isEqual(queue[0],final)

    }

    for (let i = 0; i < path.length; i++) {
        yield path[i];
    }


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
        if (array1[i] !== array2[i])
        {
            return false
        }
    }
    return true;
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

    if (UP >= 0  && !visited[UP][column]) {
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