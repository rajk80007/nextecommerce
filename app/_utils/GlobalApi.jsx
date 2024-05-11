const { default:axios } = require('axios');

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', 
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
})

const sendRegister = (data) => axiosClient.post('register', data);

const getDefault=()=>axiosClient.get('test?pupulate=*');

const sendLogin = (data) => axiosClient.post('login', data);

export default{
    getDefault, sendRegister, sendLogin
}