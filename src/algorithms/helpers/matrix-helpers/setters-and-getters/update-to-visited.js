export function updatetoVisited(node_location =[], visited =[[]]) {
    let row = node_location[0];
    let col = node_location[1];
    visited[row][col] = true;
}