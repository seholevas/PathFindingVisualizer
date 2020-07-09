import shallowCopy from "../helpers/2d-array-functions/shallow-copy";
import { updatetoVisited } from "./helpers/matrix-helpers/setters-and-getters/update-to-visited";
import { checkNeighbors } from "./helpers/matrix-helpers/async-helpers/check-neighbors";
import { updateParent } from "./helpers/matrix-helpers/setters-and-getters/update-parent";
import coordinatesAreEqual from "./helpers/matrix-helpers/setters-and-getters/coordinates-are-equal";
import getShortestPath from "./helpers/matrix-helpers/setters-and-getters/get-shortest-path";


export default function* depthFirstSearch(matrix = [[]], start_node_coordinates = [2, 2], end_node_coordinates = [0, 0], additional_destinations, walls) {
    // data structure for storing next values
    let stack = [];
    let path = [];
    let start_coordinates = [...start_node_coordinates];
    let end_coordinates = [...end_node_coordinates];
    let additional_dest = Object.assign({}, additional_destinations);
    // coordinates that have been visited
    let visited_coordinates = [];

    // matrix that shows if a node at index [i][j] has been visited
    let visited = shallowCopy(matrix, false);
    // stores whether a node at [i][j] has a parent node. if so, stores the coordinates of the parent at [i][j], else null values
    let parent_matrix = shallowCopy(matrix, null);
    // if end is found
    let found = false;
    // pushing the starting coordintes into the stack, this will be where we start our search.
    stack.push([...start_node_coordinates]);
    // while stack is not empty
    while (stack.length !== 0 && !found) {
        // the current verticies.
        let vertex_coordinates = stack.pop();
        visited_coordinates.push(vertex_coordinates);

        if (additional_dest[vertex_coordinates] !== undefined) {
            delete additional_dest[vertex_coordinates];
            let new_path = depthFirstSearch(matrix, vertex_coordinates, end_coordinates, additional_dest, walls);
            let add_to_visited_nodes = new_path.next().value
            let add_to_path = new_path.next().value
            visited_coordinates = visited_coordinates.concat(add_to_visited_nodes);
            // console.log("in additional[dest] - path pre-concat: ", path)
            // if no path to finish line
            if (add_to_path === undefined)
                break;
            // path = path.concat(add_to_path);
            console.log("in additional[dest] - path post-concat: ", path)


            end_coordinates = vertex_coordinates;
            found = true;

        }
        if (((vertex_coordinates[0] === end_coordinates[0]) && (vertex_coordinates[1] === end_coordinates[1])) && Object.keys(additional_dest).length === 0) {
            found = true;
        }
        else {
            updatetoVisited(vertex_coordinates, visited);


            const generator = checkNeighbors(vertex_coordinates, visited);
            let result = generator.next();

            while (!result.done) {
                let value = result.value

                if (!visited[value[0]][value[1]] && walls[value] === undefined) {
                    updateParent(vertex_coordinates, value, parent_matrix);
                    stack.push(value);
                }

                result = generator.next();
            }
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

    console.log("path: ", path)
    yield path
}

