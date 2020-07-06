import isEqual from "../helpers/2d-array-functions/is-equal";
import shallowCopy from "../helpers/2d-array-functions/shallow-copy";
import { checkNeighbors } from "./helpers/matrix-helpers/async-helpers/check-neighbors";
import { updatetoVisited } from "./helpers/matrix-helpers/setters-and-getters/update-to-visited";
import { updateParent } from "./helpers/matrix-helpers/setters-and-getters/update-parent";
import { updateDistance } from "./helpers/matrix-helpers/setters-and-getters/update-distance";
import getShortestPath from "./helpers/matrix-helpers/setters-and-getters/get-shortest-path";



export default function* dijkstra(matrix = [[]], source = [2, 2], end = [0, 3]) {
    // yield [...source]
    let visited_coordinates = [];
    let adjacency_matrix = shallowCopy(matrix);
    let visited = shallowCopy(matrix, false);
    let parent_coordinates = shallowCopy(matrix, null);
    let coordinates = source;
    let queue = [];

    // setting all initial values for the source node within each data structure
    adjacency_matrix[source[0]][source[1]] = 0;
    coordinates = [source[0], source[1]];
    visited[source[0]][source[1]] = true;
    parent_coordinates[source[0]][source[1]] = null;
    queue.push(coordinates);
    visited_coordinates.push(coordinates);


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
        const generator = checkNeighbors(coordinates, visited);
        let result = null;
        do {
            result = generator.next();
            var neighbors_coordinates = result.value;
            if (!result.done && !found) {
                updateDistance(adjacency_matrix[coordinates[0]][coordinates[1]], neighbors_coordinates, adjacency_matrix);
                updatetoVisited(neighbors_coordinates, visited);
                updateParent(coordinates, neighbors_coordinates, parent_coordinates);
                queue.push(neighbors_coordinates);
                found = isEqual(neighbors_coordinates, end);
                // yield [...neighbors_coordinates];
                visited_coordinates.push(neighbors_coordinates);
            }
        }
        while (!result.done)
    }
    yield visited_coordinates;
    yield getShortestPath(end, parent_coordinates);
    // yield* traverseShortestPath(end, parent_coordinates)

}
