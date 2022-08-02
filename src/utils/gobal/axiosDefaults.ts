import axios from "axios";

export function axiosDefaults() {
    axios.defaults.baseURL = 'https://api.punkapi.com/v2';
}