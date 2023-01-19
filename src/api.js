import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/animals?name='
})

export default api