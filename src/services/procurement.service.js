import axios from 'axios';


const editAmount = (amount, type, user)  => {
    return axios.post('', {amount, type, user}).then((response) => {
        window.location.href = "/dashboard/admin";
    }).catch((error) => {
        console.log(error);
    });
};

export { editAmount };

class ProcurementDataService {
    getAll() {
        return http.get("/procurements");
    }

    get(id) {
        return http.get(`/procurement/${id}`);
    }

    create(data) {
        return http.post("/procurements", data);
    }

    update(id, data) {
        return http.put(`/procurement/${id}`, data);
    }

    delete(id) {
        return http.delete(`/procurement/${id}`);
    }

    findById(id) {
        return http.get(`/procurements?id=${id}`);
    }
}

//export default new ProcurementDataService();
