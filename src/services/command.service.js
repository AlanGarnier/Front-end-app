import axios from 'axios';


const setOrder = (entree, plat, dessert)  => {
    return axios.post('', {entree, plat, dessert}).then((response) => {
        window.location.href = "/dashboard";
    }).catch((error) => {
        console.log(error);
    });
};

export { setOrder };