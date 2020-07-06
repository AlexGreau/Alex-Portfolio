import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-826b6.firebaseio.com/'
})


export default instance;