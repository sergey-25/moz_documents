import Axios from 'axios';



const api = (url, method, body = {}) => Axios({
    method,
    url: `https://jsonplaceholder.typicode.com${url}`,
    data: body,

});

export default api;