import axios from 'axios';
class Service {

    registryUserForm(name,email,password) {
        return axios.post('gentle-contentment-production.up.railway.app/api/auth/new/',{
            name,
            email,
            password
        });
    }

    login(email,password) {
        return axios.post('gentle-contentment-production.up.railway.app/api/auth/login/',{
            email,
            password
        });
    }

    getUsers() {
        return axios.get('gentle-contentment-production.up.railway.app/api/auth/users/');
    }
}

export default new Service;