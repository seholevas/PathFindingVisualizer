// 1  procedure BFS(G, root) is
// 2      let Q be a queue
// 3      label root as discovered
// 4      Q.enqueue(root)
// 5      while Q is not empty do
// 6          v := Q.dequeue()
// 7          if v is the goal then
// 8              return v
// 9          for all edges from v to w in G.adjacentEdges(v) do
// 10             if w is not labeled as discovered then
// 11                 label w as discovered
// 12                 w.parent := v
// 13                 Q.enqueue(w)

import shallowCopy from "../helpers/2d-array-functions/shallow-copy";
// import { check_neighbors, update_to_visited, update_parent } from "./dijkstra"
import traverseShortestPath from "./helpers/matrix-helpers/async-helpers/traverse-shortest-path";
import { checkNeighbors } from "./helpers/matrix-helpers/async-helpers/check-neighbors";
import { updatetoVisited } from "./helpers/matrix-helpers/setters-and-getters/update-to-visited";
import { updateParent } from "./helpers/matrix-helpers/setters-and-getters/update-parent";

export function* breadthFirstSearch(matrix = [[]], start_coordinates = [2, 2], end_coordinates = [3, 3]) {
    yield start_coordinates;

    let queue = [];
    let visited = shallowCopy(matrix, false);
    let found = false;
    let parent_matrix = shallowCopy(matrix, null);
    console.log("visited: ", visited);
    visited[start_coordinates[0]][start_coordinates[1]] = true;
    queue.push(start_coordinates);


    while (queue.length !== 0 && !found) {
        let vertex_coordinates = queue.shift();
        if ((vertex_coordinates[0] ===  end_coordinates[0]) && (vertex_coordinates[1] === end_coordinates[1])) {
            found = true;
            yield* traverseShortestPath(end_coordinates,parent_matrix);
            // yield vertex_coordinates;
        }
        else {
            const generator = checkNeighbors(vertex_coordinates, visited);
            let result = generator.next();

            while (!result.done) {
                let value = result.value

                if (visited[value[0]][value[1]] === false)
                {
                    yield value;
                    updatetoVisited(value, visited);
                    updateParent(vertex_coordinates,value,parent_matrix);
                    queue.push(value);
                }    
                result = generator.next();
            }
        }
    }
}