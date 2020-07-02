export default function generateArray(size = 4)
{
    let object = { type: "start_node", visited: false, shortest_path: false}
    let matrix =[]

    for(let i = 0; i < size; i++)
    {
        matrix([])
        matrix.push([])
        for(let j = 0; j < size; j++)
        {
            matrix[i].push(object);
        }
    }

    return matrix
}