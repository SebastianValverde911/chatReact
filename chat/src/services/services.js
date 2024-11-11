import axios from 'axios';
class Service {

    registryUserForm(name,email,password) {
        return axios.post('http://localhost:4000/api/auth/new/',{
            name,
            email,
            password
        });
    }

    login(email,password) {
        return axios.post('http://localhost:4000/api/auth/login/',{
            email,
            password
        });
    }

    getUsers() {
        return axios.get('http://localhost:4000/api/auth/users/');
    }
}

export default new Service;