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

function getAlgorithm(array = [[]], type = "mergesort") {
    if (type === "a*") {
        return aStar(array);
    }
    else if (type === "bfs") {
        return breadthFirstSearch(array);
    }
    else if (type === "dfs") {
        return depthFirstSearch(array);
    }
    else if (type === "dijkstra") {
        return dijkstra(array);
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
    var array = store.getState().grid;
    let playing = store.getState().settings;

    if (playing) {
        return;
    }

    dispatchedStartedSearch();
    playing = await store.getState().settings;

    // console.log("playing: ", playing);
    // console.log("grid: ", array);


    const pathFindingType = getValueByElementId("algorithms");
    const generator = getAlgorithm(array, pathFindingType);
    
    let visited_nodes = generator.next().value;
    
    let shortest_path_nodes = generator.next().value;


    var i = 0;
    while (playing && i < visited_nodes.length) {

        let copy_matrix = changeNodeToVisited(visited_nodes[i], array);
        dispatchedChangedNodeType(copy_matrix);
        playing = await store.getState().settings;
        i++;
        await sleep(500 / getValueByElementId("speed"));

    }

    array = store.getState().grid;
    i = 0;
    while (playing && i < shortest_path_nodes.length) {

        let copy_matrix = changeNodeToShortestPath(shortest_path_nodes[i], array);
        dispatchedChangedNodeType(copy_matrix);
        playing = await store.getState().settings;
        i++;
        await sleep(500 / getValueByElementId("speed"));

    }
    dispatchedStoppedSearch();

    // // && playing
    // while (!result.done && playing) {

    //     let value = result.value
    //     console.log("value: ", value)
    //     let shallow_matrix = updateNodeState(value, array);
    //     dispatchedChangedNodeType(shallow_matrix);
    //     result = generator.next();
    //     playing = store.getState().settings
    //     await sleep(1000 / getValueByElementId("speed"));
    // }
    // dispatchedStoppedSearch();
}