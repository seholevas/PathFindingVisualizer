import isEqual from "../helpers/2d-array-functions/is-equal";
import shallowCopy from "../helpers/2d-array-functions/shallow-copy";
import { checkNeighbors } from "./helpers/matrix-helpers/async-helpers/check-neighbors";
// import { updatetoVisited } from "./helpers/matrix-helpers/setters-and-getters/update-to-visited";
import { updateParent } from "./helpers/matrix-helpers/setters-and-getters/update-parent";
import { updateDistance } from "./helpers/matrix-helpers/setters-and-getters/update-distance";
import getShortestPath from "./helpers/matrix-helpers/setters-and-getters/get-shortest-path";
import { PriorityQueue } from "../data-structures/priority-queue";
import { calculateWeight } from "./helpers/matrix-helpers/setters-and-getters/calculate-weight";



export default function* dijkstra(matrix = [[]], source = [2, 2], end = [0, 3], additional_destinations, walls, weights) {
    // let start_coordinates = [...source];
    let end_coordinates = [...end];
    let visited_coordinates = [];
    let path = [];
    let adjacency_matrix = shallowCopy(matrix);
    let visited = shallowCopy(matrix, false);
    let parent_coordinates = shallowCopy(matrix, null);
    let coordinates = [...source];
    let queue = new PriorityQueue();
    let additional_dest = Object.assign({}, additional_destinations);
    adjacency_matrix[source[0]][source[1]] = 0;
    coordinates = [source[0], source[1]];
    visited[source[0]][source[1]] = true;
    parent_coordinates[source[0]][source[1]] = null;
    queue.enqueue(coordinates, 0);
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
    while (!found && !queue.isEmpty()) {
        coordinates = queue.dequeue().element;
        visited_coordinates.push(coordinates);
        // updatetoVisited(coordinates, visited);
        if (additional_dest[coordinates] !== undefined) {
            delete additional_dest[coordinates];
            let new_path = dijkstra(matrix, coordinates, end, additional_dest, walls, weights);
            let add_to_visited_nodes = new_path.next().value
            let add_to_path = new_path.next().value
            visited_coordinates = visited_coordinates.concat(add_to_visited_nodes);
            console.log("in additional[dest] - path pre-concat: ", path)
            // if no path to finish line
            if (add_to_path === undefined)
                break;
            path = path.concat(add_to_path);
            console.log("in additional[dest] - path post-concat: ", path)
            end_coordinates = coordinates;
            found = true;
        }
        if (((coordinates[0] === end_coordinates[0]) && (coordinates[1] === end_coordinates[1])) && Object.keys(additional_dest).length === 0) {
            found = true;
        }

        const generator = checkNeighbors(coordinates, visited);
        let result = null;

        do {
            result = generator.next();
            var neighbors_coordinates = result.value;
            if (!result.done && !found && walls[neighbors_coordinates] === undefined) {
                let alternative_weight = calculateWeight(adjacency_matrix[coordinates[0]][coordinates[1]], neighbors_coordinates, weights)
                if (alternative_weight < adjacency_matrix[neighbors_coordinates[0]][neighbors_coordinates[1]]) {
                    updateDistance(alternative_weight, neighbors_coordinates, adjacency_matrix);
                    queue.enqueue(neighbors_coordinates, alternative_weight);
                    updateParent(coordinates, neighbors_coordinates, parent_coordinates);
                }
            }
        }
        while (!result.done)
    }
    yield visited_coordinates;
    // could be undefined or a path
    let undefined_or_path = getShortestPath(end_coordinates, parent_coordinates);
    // if it is undefined, return undefined (void)
    if (undefined_or_path === undefined) {
        return;
    }

    path = undefined_or_path.concat(path);


    yield path
    // yield* traverseShortestPath(end, parent_coordinates)

}
