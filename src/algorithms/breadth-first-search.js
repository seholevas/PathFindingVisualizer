import shallowCopy from "../helpers/2d-array-functions/shallow-copy";
import { checkNeighbors } from "./helpers/matrix-helpers/async-helpers/check-neighbors";
import { updatetoVisited } from "./helpers/matrix-helpers/setters-and-getters/update-to-visited";
import { updateParent } from "./helpers/matrix-helpers/setters-and-getters/update-parent";
import getShortestPath from "./helpers/matrix-helpers/setters-and-getters/get-shortest-path"
export function* breadthFirstSearch(matrix = [[]], start_coordinates = [0, 0], end_coordinates = [3,3], additional_destinations, walls, weights) {
    let visited_coordinates = [];
    let queue = [];
    let visited = shallowCopy(matrix, false);
    let found = false;
    let parent_matrix = shallowCopy(matrix, null);
    console.log("visited: ", visited);
    visited[start_coordinates[0]][start_coordinates[1]] = true;
    visited_coordinates.push(start_coordinates);
    queue.push(start_coordinates);


    while (queue.length !== 0 && !found) {
        let vertex_coordinates = queue.shift();
        if ((vertex_coordinates[0] ===  end_coordinates[0]) && (vertex_coordinates[1] === end_coordinates[1])) {
            found = true;
            yield visited_coordinates;
            
        }
        else {
            const generator = checkNeighbors(vertex_coordinates, visited);
            let result = generator.next();

            while (!result.done) {
                let value = result.value

                if (!visited[value[0]][value[1]])
                {
                    // yield value;
                    updatetoVisited(value, visited);
                    updateParent(vertex_coordinates,value,parent_matrix);
                    queue.push(value);
                    visited_coordinates.push(value);
                }    
                result = generator.next();
            }
        }
    }
    
    yield getShortestPath(end_coordinates, parent_matrix);
}