import axios from "axios"; 

const customFetch = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
    }
})

export default customFetch;