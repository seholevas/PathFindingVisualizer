export function calculateWeight(prev_value, node_coordinates, weighted_nodes_dict)
{
    let additional_value = 1;

    if(weighted_nodes_dict[node_coordinates] !== undefined)
    {
        additional_value += 10
    }

    return prev_value + additional_value;
}