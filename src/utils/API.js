import axios from "axios";

export default axios.create({
    baseUrl: "https://pokeapi.co/api/v2/pokemon/",
    responseType: "json"
});