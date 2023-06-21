import axios from 'axios';

const signin = (login, password) => {
    return axios.post('', { login, password}).then((response) => {
        window.location.href = "/accueil";
    }).catch((error) => {
        console.log(error);
    });
};

export { signin };