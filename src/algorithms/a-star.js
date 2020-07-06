import shallowCopy from "../helpers/2d-array-functions/shallow-copy"
import { checkNeighbors } from "./helpers/matrix-helpers/async-helpers/check-neighbors";
import { updateParent } from "./helpers/matrix-helpers/setters-and-getters/update-parent";
import coordinatesAreEqual from "./helpers/matrix-helpers/setters-and-getters/coordinates-are-equal";
import {PriorityQueue} from "../data-structures/priority-queue"
import { updatetoVisited } from "./helpers/matrix-helpers/setters-and-getters/update-to-visited";
import getShortestPath from "./helpers/matrix-helpers/setters-and-getters/get-shortest-path";

export default function* aStar(adjacency_matrix = [[]], start_coordinates = [0, 0], end_cordinates = [3, 3]) {
    
    var priority_queue = new PriorityQueue();
    let visited_coordinates = [];
    let parent_matrix = shallowCopy(adjacency_matrix, null);
    let visited = shallowCopy(adjacency_matrix, false);
    let distance_matrix = shallowCopy(adjacency_matrix, Infinity);

    distance_matrix[start_coordinates[0]][start_coordinates[1]] = 0;

    priority_queue.enqueue([...start_coordinates], manhattanDistance(start_coordinates, end_cordinates));
    while (!priority_queue.isEmpty()) {
        let q_item = priority_queue.dequeue();
        // let f_cost = tuple[0];
        let current_coordinates = q_item.element;
        updatetoVisited(current_coordinates,visited);
        visited_coordinates.push(current_coordinates);
        // yield [...current_coordinates];

        if(coordinatesAreEqual(current_coordinates,end_cordinates))
        {
            break;
        }

        const generator = checkNeighbors(current_coordinates, visited);
        let result = generator.next();

        while (!result.done) {
            let neighbor_coordinates = result.value
            let have_visited = visited[neighbor_coordinates[0]][neighbor_coordinates[1]];
            // EDIT: needs to change once weight and walls are added in.
            let cost_from_current_node = distance_matrix[current_coordinates[0]][current_coordinates[1]] + 1;

            let f_cost = cost_from_current_node + manhattanDistance(neighbor_coordinates, end_cordinates)

            let is_current_cost_less = distance_matrix[neighbor_coordinates[0]][neighbor_coordinates[1]] > cost_from_current_node
            let is_neighbor_in_priority_queue = priority_queue.items.includes([f_cost, neighbor_coordinates]);

            if (!have_visited && is_neighbor_in_priority_queue && is_current_cost_less) {
                const index = priority_queue.items.indexOf([f_cost, neighbor_coordinates]);
                priority_queue.items.splice(index);

            }
            if (!have_visited && is_current_cost_less && !is_neighbor_in_priority_queue) {
                // update the distance of the neighbor_node
                distance_matrix[neighbor_coordinates[0]][neighbor_coordinates[1]] = cost_from_current_node;
                // update the parent node of the neighbor node to the current node
                updateParent(current_coordinates, neighbor_coordinates, parent_matrix);
                priority_queue.enqueue(neighbor_coordinates, manhattanDistance(neighbor_coordinates, end_cordinates))
            }
            
            result = generator.next();
        }
    }
    yield visited_coordinates;
    yield getShortestPath(end_cordinates, parent_matrix);
    // yield* traverseShortestPath(end_cordinates,parent_matrix);




}


function manhattanDistance(coordinates1 = [], coordinates2 = []) {
    return Math.abs(coordinates1[0] - coordinates2[0]) + Math.abs(coordinates1[1] - coordinates2[1]);
}