export default function shallowCopy(array, starting_value) {
    const temp = [];

    for (let i = 0; i < array.length; i++) {
        if (starting_value === undefined)
        {
            temp.push([...array[i]])
        }
        else
        {
            temp.push([...array[i]].fill(starting_value))
        }
    }
    return temp;
}