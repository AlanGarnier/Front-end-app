import axios from "axios";
import {apiUrl} from "../config";


// Récupération de la liste des utilisateurs
const users = async () => {
    try {
        return await axios.get(`${apiUrl}users`)
            .then(response => {
                return response.data;
            })
    }
    catch (error) {
        return error;
    }
}


export { users }