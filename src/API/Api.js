import axios from 'axios';

// Create instance called instance

const BASE_URL="https://goinvoicy.com/api";
const instance = axios.create({
    baseURL: 'https://goinvoicy.com/api',
    withCredentials: false,
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin':"*",
        'acquirerid': 'M2P',
        'channel': 'WEB',
        'mti': '0000'
    },
});

export default {
    getData: (endpoint, headers) =>
        instance({
            'headers': headers,
            'method': 'GET',
            'url': endpoint,
            // 'params': {
            //     'search': 'parameter',
            // },
        }),
    postData: (endpoint, headers, data) =>
        instance({
            'headers': headers,
            'method': 'POST',
            'url': endpoint,
            'data': data
        })
}