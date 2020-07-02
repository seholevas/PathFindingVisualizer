export default function shallowCopy(array) {
    const temp = [];

    for (let i = 0; i < array.length; i++) {
        temp.push([...array[i]])
    }
    // console.log('temp: ', temp)
    return temp;
}