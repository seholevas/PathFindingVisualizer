import { getValueByElementId } from "../helpers/functions/get-value-by-element-id";
import store from "../redux/stores/store"
import dijkstra from "../algorithms/dijkstra"
import updateNodeState from "../helpers/state-functions/update-node-state";
import { dispatchedChangedNodeType } from "../redux/dispatchs/grid-dispatchs";
import { sleep } from "../helpers/async-functions/sleep";
import { dispatchedStartedSearch } from "../redux/dispatchs/settings-dispatchs";

function getAlgorithm(array = [[]], type = "mergesort") {
    if (type === "a*") {
        // return Merge(array);
    }
    else if (type === "bfs") {
        // return BubbleSort(array);
    }
    else if (type === "dfs") {
        // return SelectionSort(array);
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
    const array = store.getState().grid;
    let playing = store.getState().settings;

    if (playing) {
        return;
    }

    dispatchedStartedSearch();
    playing = store.getState().settings;

    console.log("playing: ", playing);
    console.log("grid: ", array);


    const pathFindingType = getValueByElementId("algorithms");
    const generator = getAlgorithm(array, pathFindingType);
    let result = generator.next();

    // && playing
    while (!result.done && playing) {

        let value = result.value
        console.log("value: ", value)
        let shallow_matrix = updateNodeState(value, array);
        dispatchedChangedNodeType(shallow_matrix);
        result = generator.next();
        await sleep(1000 / getValueByElementId("speed"));
        playing = store.getState().settings
        // await sleep(1000 / getValueByElementId("speed"));    }
        // dispatchSortStopped()
    }
}