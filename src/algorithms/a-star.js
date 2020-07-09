import shallowCopy from "../helpers/2d-array-functions/shallow-copy"
import { checkNeighbors } from "./helpers/matrix-helpers/async-helpers/check-neighbors";
// import { updateParent } from "./helpers/matrix-helpers/setters-and-getters/update-parent";
import { PriorityQueue } from "../data-structures/priority-queue"
import { updatetoVisited } from "./helpers/matrix-helpers/setters-and-getters/update-to-visited";
import getShortestPath from "./helpers/matrix-helpers/setters-and-getters/get-shortest-path";
// import { updateDistance } from "./helpers/matrix-helpers/setters-and-getters/update-distance";
import { calculateWeight } from "./helpers/matrix-helpers/setters-and-getters/calculate-weight";
import { updateParent } from "./helpers/matrix-helpers/setters-and-getters/update-parent";
import { updateDistance } from "./helpers/matrix-helpers/setters-and-getters/update-distance";

export default function* aStar(matrix = [[]], start = [0, 0], end = [3, 3], additional_destinations = {}, walls = {}, weights = {}) {
    let found = false;
    let start_coordinates = [...start]
    let end_coordinates = [...end]
    var priority_queue = new PriorityQueue();
    let additional_dest = Object.assign({}, additional_destinations);
    let visited_coordinates = [];
    let path = [];
    let parent_matrix = shallowCopy(matrix, null);
    let visited = shallowCopy(matrix, false);
    let distance_matrix = shallowCopy(matrix, Infinity);


    distance_matrix[start_coordinates[0]][start_coordinates[1]] = 0;

    priority_queue.enqueue([...start_coordinates], manhattanDistance(start_coordinates, end_coordinates));
    while (!priority_queue.isEmpty() && !found) {
        let q_item = priority_queue.dequeue();
        // let f_cost = tuple[0];
        let current_coordinates = q_item.element;
        updatetoVisited(current_coordinates, visited);
        visited_coordinates.push(current_coordinates);

        if (Object.keys(additional_dest).length !== 0) {
            let keys = Object.keys(additional_dest);
            let next_dest = additional_dest[keys[0]]
            delete additional_dest[keys[0]];
            let new_path = aStar(matrix, current_coordinates, next_dest, additional_dest, walls, weights);
            let add_to_visited_nodes = new_path.next().value;
            let add_shortest_path = new_path.next().value;
            visited_coordinates = visited_coordinates.concat(add_to_visited_nodes);
            if (add_shortest_path === undefined)
                break;
            path = path.concat(add_shortest_path);

            // end_coordinates = current_coordinates;
            // found = true;


        }
        if (((current_coordinates[0] === end_coordinates[0]) && (current_coordinates[1] === end_coordinates[1])) && Object.keys(additional_dest).length === 0) {
            found = true;
        }
        // yield [...current_coordinates];

        // if(coordinatesAreEqual(current_coordinates,end_coordinates))
        // {
        //     break;
        // }

        const generator = checkNeighbors(current_coordinates, visited);
        let result = generator.next();

        while (!result.done && !found) {
            let neighbor_coordinates = result.value
            let have_visited = visited[neighbor_coordinates[0]][neighbor_coordinates[1]];
            // EDIT: needs to change once weight and walls are added in.
            let cost_from_current_node = calculateWeight(distance_matrix[current_coordinates[0]][current_coordinates[1]], neighbor_coordinates, weights);

            let f_cost = cost_from_current_node + manhattanDistance(neighbor_coordinates, end_coordinates);
            // cost_from_current_node + manhattanDistance(neighbor_coordinates, end_coordinates) 

            let is_current_cost_less = f_cost < distance_matrix[neighbor_coordinates[0]][neighbor_coordinates[1]];
            let is_neighbor_in_priority_queue = priority_queue.items.includes([f_cost, neighbor_coordinates]);

            // if (!have_visited && is_neighbor_in_priority_queue && is_current_cost_less) {
            //     const index = priority_queue.items.indexOf([f_cost, neighbor_coordinates]);
            //     priority_queue.items.splice(index);

            // }
            if (!have_visited && is_current_cost_less && !is_neighbor_in_priority_queue && walls[neighbor_coordinates] === undefined) {
                // update the distance of the neighbor_node
                updateDistance(f_cost, neighbor_coordinates, distance_matrix)
                // distance_matrix[neighbor_coordinates[0]][neighbor_coordinates[1]] = cost_from_current_node;
                // update the parent node of the neighbor node to the current node
                updateParent(current_coordinates, neighbor_coordinates, parent_matrix);
                priority_queue.enqueue(neighbor_coordinates, calculateWeight(manhattanDistance(neighbor_coordinates, end_coordinates), neighbor_coordinates, weights))
            }

            result = generator.next();
        }
    }
    yield visited_coordinates;
    // could be undefined or a path
    let undefined_or_path = getShortestPath(end_coordinates, parent_matrix);
    // if it is undefined, return undefined (void)
    if (undefined_or_path === undefined) {
        return;
    }

    path = path.concat(undefined_or_path);


    yield path
    // yield getShortestPath(end_coordinates, parent_matrix);
    // yield* traverseShortestPath(end_coordinates,parent_matrix);




}
function manhattanDistance(coordinates1 = [], coordinates2 = []) {
    return Math.abs(coordinates1[0] - coordinates2[0]) + Math.abs(coordinates1[1] - coordinates2[1]);
}