export default function generateMatrix(size = 4)
{
    let object = { type: "empty_node", visited: false, shortest_path: false}
    let matrix =[]

    for(let i = 0; i < size; i++)
    {
        matrix.push([])
        for(let j = 0; j < size; j++)
        {
            matrix[i].push(Object.assign({}, object));
        }
    } 
    return matrix
}