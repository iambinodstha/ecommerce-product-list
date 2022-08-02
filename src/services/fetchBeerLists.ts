import axios from "axios";

export async function fetchBeerLists(page: number) {
    const params = {
        page,
        per_page: 10
    }
    const { data } = await axios.get('/beers', { params });
    return data;
}