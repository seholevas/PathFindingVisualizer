import shallowCopy from "../helpers/2d-array-functions/shallow-copy";
import { checkNeighbors } from "./helpers/matrix-helpers/async-helpers/check-neighbors";
import { updatetoVisited } from "./helpers/matrix-helpers/setters-and-getters/update-to-visited";
import { updateParent } from "./helpers/matrix-helpers/setters-and-getters/update-parent";
import getShortestPath from "./helpers/matrix-helpers/setters-and-getters/get-shortest-path"
import coordinatesAreEqual from "./helpers/matrix-helpers/setters-and-getters/coordinates-are-equal";
export function* breadthFirstSearch(matrix = [[]], start = [0, 0], end = [3,3], additional_destinations, walls) {
    let visited_coordinates = [];
    let queue = [];
    let path = []
    let start_coordinates =[...start];
    let end_coordinates =[...end];
    let visited = shallowCopy(matrix, false);
    let found = false;
    let additional_dest = Object.assign({},additional_destinations);
    let parent_matrix = shallowCopy(matrix, null);
    // console.log("visited: ", visited);
    visited[start_coordinates[0]][start_coordinates[1]] = true;
    visited_coordinates.push(start_coordinates);
    queue.push(start_coordinates);


    while (queue.length !== 0 && !found) {
        let vertex_coordinates = queue.shift();
        if(additional_dest[vertex_coordinates] !== undefined)
        {
            delete additional_dest[vertex_coordinates];
            let new_path = breadthFirstSearch(matrix,vertex_coordinates,end_coordinates,additional_dest,walls)
            let add_to_visited_nodes = new_path.next().value
            let add_to_path = new_path.next().value
            visited_coordinates = visited_coordinates.concat(add_to_visited_nodes);
            console.log("in additional[dest] - path pre-concat: ",path)
            path = path.concat(add_to_path);
            console.log("in additional[dest] - path post-concat: ",path)


            end_coordinates = vertex_coordinates;
            found = true;

        }
        if (((vertex_coordinates[0] ===  end_coordinates[0]) && (vertex_coordinates[1] === end_coordinates[1])) && Object.keys(additional_dest).length === 0) {
            found = true;            
        }
        else {
            const generator = checkNeighbors(vertex_coordinates, visited);
            let result = generator.next();

            while (!result.done) {
                let value = result.value

                if (!visited[value[0]][value[1]] && walls[value] === undefined)
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
    path = getShortestPath(end_coordinates, parent_matrix).concat(path);
    console.log("after GSP.concat() - path post-concat: ",path)

    // path = path.concat(getShortestPath(end_coordinates, parent_matrix));

    yield visited_coordinates;
    yield path
}