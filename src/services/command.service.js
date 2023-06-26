import axios from 'axios';
import {apiUrl} from "../config";


// Créer une commande
const setOrder = (idMenu)  => {
    try{
        return axios.post(`${apiUrl}`, {idMenu})
            .then( response => {
            window.location.href = "/dashboard";
            })
    }
    catch (error) {
        console.log(error);
    }
};


const getOrders = () => {
    try{
        return axios.post(`${apiUrl}orders`)
            .then(response => {
                return response.data;
            })
    }
    catch (error) {
        console.log(error);
    }
}


const getDailyOrders = () => {
    try{
        return axios.post(`${apiUrl}orders`)
            .then(response => {
                return response.data;
            })
    }
    catch (error) {
        console.log(error);
    }
}


const getCustomerDailyOrder = () => {
    try{
        return axios.post(`${apiUrl}orders`)
            .then(response => {
                return response.data;
            })
    }
    catch (error) {
        console.log(error);
    }
}

const getCustomerOrders = () => {
    try{
        return axios.post(`${apiUrl}orders`)
            .then(response => {
                return response.data;
            })
    }
    catch (error) {
        console.log(error);
    }
}


export { setOrder, getOrders, getDailyOrders, getCustomerDailyOrder, getCustomerOrders };