// procedure DFS_iterative(G, v) is
//     let S be a stack
//     S.push(v)
//     while S is not empty do
//         v = S.pop()
//         if v is not labeled as discovered then
//             label v as discovered
//             for all edges from v to w in G.adjacentEdges(v) do 
//                 S.push(w)

import shallowCopy from "../helpers/2d-array-functions/shallow-copy";
import { updatetoVisited } from "./helpers/matrix-helpers/setters-and-getters/update-to-visited";
import { checkNeighbors } from "./helpers/matrix-helpers/async-helpers/check-neighbors";
import { updateParent } from "./helpers/matrix-helpers/setters-and-getters/update-parent";
import coordinatesAreEqual from "./helpers/matrix-helpers/setters-and-getters/coordinates-are-equal";
import traverseShortestPath from "./helpers/matrix-helpers/async-helpers/traverse-shortest-path";
import getShortestPath from "./helpers/matrix-helpers/setters-and-getters/get-shortest-path";


export default function* depthFirstSearch(adjacency_matrix = [[]], start_node_coordinates = [2, 2], end_node_coordinates = [0, 0]) {
    // data structure for storing next values
    let stack = [];

    // coordinates that have been visited
    let visited_coordinates = [];

    // matrix that shows if a node at index [i][j] has been visited
    let visited = shallowCopy(adjacency_matrix, false);
    // stores whether a node at [i][j] has a parent node. if so, stores the coordinates of the parent at [i][j], else null values
    let parent_matrix = shallowCopy(adjacency_matrix, null);
    // if end is found
    let found = false;
    // pushing the starting coordintes into the stack, this will be where we start our search.
    stack.push([...start_node_coordinates]);
    // while stack is not empty
    while (stack.length !== 0 && !found) {
        // the current verticies.
        let vertex_coordinates = stack.pop();
        visited_coordinates.push(vertex_coordinates);
        // yielding the coordinates
        // yield [...vertex_coordinates];

        if(coordinatesAreEqual(vertex_coordinates, end_node_coordinates))
        {
            found = true;
            yield visited_coordinates;
            continue;
        }

        // if (!visited[vertex_coordinates[0]][vertex_coordinates[1]] && !found) {
            updatetoVisited(vertex_coordinates, visited);


            const generator = checkNeighbors(vertex_coordinates, visited);
            let result = generator.next();

            while (!result.done) {
                let value = result.value

                if (!visited[value[0]][value[1]]) {
                    updateParent(vertex_coordinates, value, parent_matrix);
                    stack.push(value);
                }

                result = generator.next();
            }
        // }
    }

    // yield* traverseShortestPath(end_node_coordinates, parent_matrix);

    yield getShortestPath(end_node_coordinates, parent_matrix);
}

