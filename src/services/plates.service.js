import axios from "axios";
import {apiUrl} from "../config";

// url entree
const urlEntree = apiUrl + 'plate/entree';
// url plat
const urlPlat = apiUrl + 'plate/plat';
// url dessert
const urlDessert = apiUrl + 'plate/dessert';

const entree = async () => {
    try{
        return await axios.get(`${urlEntree}`)
            .then(response => {
                return response.data;
            })
    }
    catch (error) {
        return error;
    }
};

const plat = async () => {
    try{
        return await axios.get(`${urlPlat}`)
            .then(response => {
                return response.data;
            })
    }
    catch (error) {
        return error
    }
};

const dessert = async () => {
    try{
        return await axios.get(`${urlDessert}`)
            .then(response => {
                return response.data;
            })
    }
    catch (error) {
        return error
    }
};

export { entree, plat, dessert };