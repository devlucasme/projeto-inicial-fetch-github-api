import { eventsQuantity, baseUrl } from "../variables.js";

async function events(userName) {
    const url = `${baseUrl}/${userName}/events?per_page=${eventsQuantity}`;
    const reponse = await fetch(url);
    return await reponse.json();
}

export { events }