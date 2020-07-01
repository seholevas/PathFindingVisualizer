import { getValueByElementId } from "../helpers/functions/get-value-by-element-id";
import store from "../redux/stores/store"
import dijkstra from "../algorithms/dijkstra"

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
    console.log("playing: ", playing);
    // console.log("grid: ", array);


    const pathFindingType = getValueByElementId("algorithms");
    const generator = getAlgorithm(array, pathFindingType);
    let result = "currently_null";
    // let result = generator.next();
    do
    {
        result = await generator.next();
        let value = result.value;
        console.log("value: ", value)
        playing = await store.getState().settings;
    }
    while(!result.done);
    // dispatchSortStopped()
}