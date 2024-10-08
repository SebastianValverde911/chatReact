import axios from 'axios';
class Service {

    registryUserForm(name,email,password) {
        return axios.post('http://localhost:4000/api/auth/new/',{
            name,
            email,
            password
        });
    }
}

export default new Service;