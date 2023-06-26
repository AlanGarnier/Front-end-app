import axios from 'axios';
import {apiUrl} from "../config";

// Créer un Menu
const setMenu = (titleMenu, entree, plat, dessert)  => {
    try{
        return axios.post(`${apiUrl}add`, {titleMenu, entree, plat, dessert})
            .then( response => {
                window.location.href = "/dashboard";
            })
    }
    catch (error) {
        console.log(error);
    }
};


export { setMenu };