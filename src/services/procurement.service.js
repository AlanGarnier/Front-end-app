import axios from 'axios';
import {apiUrl} from "../config";

const editAmount = async (amount, type, user)  => {
    try {
        return await axios.post(`${apiUrl}procurement`, {amount, type, user})
                .then((response) => {
            window.location.href = "/dashboard/admin";
        })
    }
    catch (error) {
        return error
    }
};



export { editAmount };
