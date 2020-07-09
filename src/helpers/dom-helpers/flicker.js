import { sleep } from "../async-functions/sleep";

export default async function flicker(coordinates)
{

    var flicker_element = document.getElementById(coordinates[0]+"-"+coordinates[1]);
    flicker_element.classList.add("flicker");
    await sleep(20);
    flicker_element.classList.add("white")
    await sleep(20);
    flicker_element.classList.remove("white");
    await sleep(10);
    flicker_element.classList.remove("flicker");
}