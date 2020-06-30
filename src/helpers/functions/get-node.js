export default function getNode(grid=[[]],id = '0-0') {
    let coordinates = id.split("-");
    let row = parseInt(coordinates[0]);
    let column = parseInt(coordinates[1]);
    return grid[row][column];
}