export function* checkNeighbors(node_location = [], visited = [[]]) {
    let row = node_location[0];
    let column = node_location[1];
    const RIGHT = column + 1;
    const LEFT = column - 1;
    const UP = row - 1;
    const DOWN = row + 1;


    if (UP >= 0 && !visited[UP][column]) {
        yield [UP, column];
    }

    if (RIGHT >= 0 && RIGHT < visited.length && !visited[row][RIGHT]) {
        yield [row, RIGHT];
    }
    if (DOWN >= 0 && DOWN < visited.length && !visited[DOWN][column]) {
        yield [DOWN, column];
    }

    if (LEFT >= 0 && !visited[row][LEFT]) {
        yield [row, LEFT];
    }


}