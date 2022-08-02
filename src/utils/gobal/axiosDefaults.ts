import axios from "axios";

export function axiosDefaults() {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URI;
}