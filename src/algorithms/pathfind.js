import { getValueByElementId } from "../helpers/functions/get-value-by-element-id";
import store from "../redux/stores/store"
import dijkstra from "../algorithms/dijkstra"
import { changeNodeToVisited, changeNodeToShortestPath } from "../helpers/state-functions/update-node-state";
import { dispatchedChangedNodeType } from "../redux/dispatchs/grid-dispatchs";
import { sleep } from "../helpers/async-functions/sleep";
import { dispatchedStartedSearch, dispatchedStoppedSearch } from "../redux/dispatchs/settings-dispatchs";
import { breadthFirstSearch } from "./breadth-first-search";
import depthFirstSearch from "./depth-first-search";
import aStar from "./a-star";
import flicker from "../helpers/dom-helpers/flicker";
import { clearPath } from "../helpers/state-functions/clear-matrix";

function getAlgorithm(array = [[]], type = "mergesort", start_coordinates, end_coordinates, additional_destinations, walls, weights) {
    let copy_add_dest = Object.assign({}, additional_destinations);


    if (type === "a*") {
        return aStar(array, start_coordinates, end_coordinates, copy_add_dest, walls, weights);
    }
    else if (type === "bfs") {
        return breadthFirstSearch(array, start_coordinates, end_coordinates, additional_destinations, walls);
    }
    else if (type === "dfs") {
        return depthFirstSearch(array, start_coordinates, end_coordinates, additional_destinations, walls, weights);
    }
    else if (type === "dijkstra") {
        return dijkstra(array, start_coordinates, end_coordinates, additional_destinations, walls, weights);
    }
    // else if (type === "insertionsort") {
    //     return InsertionSort(array);
    // }
    // else if (type === "quicksort") {
    //     return QuickSort(array, 0, array.length - 1);
    // }
    // else if (type === "cocktailsort") {

    // }
}

export default async function startPathFinding() {
    var array = await store.getState().grid;
    let playing = await store.getState().settings;
    let start_coordinates = await store.getState().nodes.start_coordinates;
    let end_coordinates = await store.getState().nodes.end_coordinates;
    let weights = await store.getState().nodes.weight_coordinates;
    let walls = await store.getState().nodes.wall_coordinates;
    let additional_destinations = await store.getState().nodes.additional_destination_coordinates;

    if (playing) {
        return;
    }
    else
    {
        await clearPath();
    }

    dispatchedStartedSearch();
    playing = await store.getState().settings;

    // console.log("playing: ", playing);
    // console.log("grid: ", array);


    const pathFindingType = getValueByElementId("algorithms");
    const generator = getAlgorithm(array, pathFindingType, start_coordinates, end_coordinates, additional_destinations, walls, weights);

    let visited_nodes = generator.next().value;

    let shortest_path_nodes = generator.next().value;


    var i = 0;
    while (playing && i < visited_nodes.length) {
        
        let copy_matrix = changeNodeToVisited(visited_nodes[i], array);
        await dispatchedChangedNodeType(copy_matrix);
        await flicker(visited_nodes[i]);
        playing = await store.getState().settings;
        i++;
        await sleep(500 / getValueByElementId("speed"));

    }

    array = await store.getState().grid;
    i = 0;
    if(shortest_path_nodes === undefined)
    {
        alert("There is no path to the end desination!");
        return;
    }

    while (playing && i < shortest_path_nodes.length) {

        let copy_matrix = changeNodeToShortestPath(shortest_path_nodes[i], array);
        await dispatchedChangedNodeType(copy_matrix);
        await flicker(shortest_path_nodes[i])
        playing = await store.getState().settings;
        i++;
        await sleep(500 / getValueByElementId("speed"));

    }
    await dispatchedStoppedSearch();
}