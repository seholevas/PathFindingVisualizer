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

export default function* aStar(matrix = [[]], start = [0, 0], end = [3, 3], additional_destinations ={}, walls={}, weights={}) {
    let found = false;
    let start_coordinates =[...start]
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
        updatetoVisited(current_coordinates,visited);
        visited_coordinates.push(current_coordinates);

        if (additional_dest[current_coordinates] !== undefined) {
            delete additional_dest[current_coordinates];
            let new_path = aStar(matrix, current_coordinates, end_coordinates, additional_dest, walls)
            let add_to_visited_nodes = new_path.next().value
            let add_to_path = new_path.next().value
            visited_coordinates = visited_coordinates.concat(add_to_visited_nodes);
            console.log("in additional[dest] - path pre-concat: ", path)
            // if no path to finish line
            if (add_to_path === undefined)
                break;
            path = path.concat(add_to_path);
            console.log("in additional[dest] - path post-concat: ", path)


            end_coordinates = current_coordinates;
            found = true;

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
            let cost_from_current_node = calculateWeight(distance_matrix[current_coordinates[0]][current_coordinates[1]],neighbor_coordinates,weights);

            let f_cost = cost_from_current_node + manhattanDistance(neighbor_coordinates,end_coordinates);
            // cost_from_current_node + manhattanDistance(neighbor_coordinates, end_coordinates) 

            let is_current_cost_less = distance_matrix[neighbor_coordinates[0]][neighbor_coordinates[1]] > cost_from_current_node
            let is_neighbor_in_priority_queue = priority_queue.items.includes([f_cost, neighbor_coordinates]);

            if (!have_visited && is_neighbor_in_priority_queue && is_current_cost_less) {
                const index = priority_queue.items.indexOf([f_cost, neighbor_coordinates]);
                priority_queue.items.splice(index);

            }
            if (!have_visited && is_current_cost_less && !is_neighbor_in_priority_queue && walls[neighbor_coordinates] === undefined) {
                // update the distance of the neighbor_node
                updateDistance(cost_from_current_node,neighbor_coordinates,distance_matrix)
                // distance_matrix[neighbor_coordinates[0]][neighbor_coordinates[1]] = cost_from_current_node;
                // update the parent node of the neighbor node to the current node
                updateParent(current_coordinates, neighbor_coordinates, parent_matrix);
                priority_queue.enqueue(neighbor_coordinates, manhattanDistance(neighbor_coordinates, end_coordinates))
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

    path = undefined_or_path.concat(path);


    yield path
    // yield getShortestPath(end_coordinates, parent_matrix);
    // yield* traverseShortestPath(end_coordinates,parent_matrix);




}

// export default function* aStar(matrix = [[]], start = [5, 5], end = [9, 9], additional_destinations = {}, walls = {}, weights = {}) {
//     let start_coordinates = [...start];
//     let end_coordinates = [...end];
//     // let open_set = new Set();
//     let open_set = new PriorityQueue();
//     let visited_coordinates = [];
//     let path = [];
//     let came_from = shallowCopy(matrix, null);
//     let visited = shallowCopy(matrix, false);
//     let g_score = shallowCopy(matrix, Infinity);
//     let f_score = shallowCopy(matrix, Infinity);
//     let found = false;
//     g_score[start_coordinates[0]][start_coordinates[1]] = 0;
//     f_score[start_coordinates[0]][start_coordinates[1]] = manhattanDistance(start_coordinates, end_coordinates) + calculateWeight(0, start_coordinates, weights);

//     open_set.enqueue(start_coordinates, f_score[start_coordinates[0]][start_coordinates[1]]);

//     while (!open_set.isEmpty() && !found) {
//         let current = open_set.dequeue().element;
//         console.log("dequeued current: ", current)
//         visited_coordinates.push(current);

//         if (current[0] === end[0] && current[1] === end[1]) {
//             found = true;
//         }
//         else {
//             console.log("in else")
//             const generator = checkNeighbors(current, visited);
//             let result = generator.next();
//             console.log("generator: ", generator, " result done?: ", result.done)

//             while (!result.done) {
//                 let neighbor = result.value
//                 let tentative_g_score = g_score[current[0]][current[1]] + calculateWeight(g_score[current[0]][current[1]], neighbor, weights);
//                 if (tentative_g_score < g_score[neighbor[0]][neighbor[1]] && walls[neighbor] === undefined) {
//                     updateParent(current, neighbor, came_from);
//                     // g_score[neighbor[1]][neighbor[2]] = tentative_g_score;
//                     // f_score[neighbor[0]][neighbor[1]] = tentative_g_score + manhattanDistance(neighbor, end);
//                     // console.log("enqueued current: ", neighbor)
//                     updateDistance(tentative_g_score,neighbor,g_score);
//                     updateDistance(tentative_g_score + manhattanDistance(neighbor,end), neighbor, f_score);
//                     open_set.enqueue(neighbor, f_score[neighbor[0]][neighbor[1]]);


                
//                 }
//                 result = generator.next();
//             }
//         }


//     }

//     yield visited_coordinates;
//     // could be undefined or a path
//     let undefined_or_path = getShortestPath(end_coordinates, came_from);
//     // if it is undefined, return undefined (void)
//     if (undefined_or_path === undefined) {
//         return;
//     }

//     path = undefined_or_path.concat(path);


//     yield path




// }


function manhattanDistance(coordinates1 = [], coordinates2 = []) {
    return Math.abs(coordinates1[0] - coordinates2[0]) + Math.abs(coordinates1[1] - coordinates2[1]);
}