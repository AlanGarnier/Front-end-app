import axios from "axios";
import {apiUrl} from "../../config";


const signup = async (email, password, firstName, lastName, phoneNumber, confirmPassword) => {
    try{
        return await axios.post(`${apiUrl}register`, {
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
            confirmPassword
        });
    }
    catch (error) {
        return error;
    }
}

export { signup }