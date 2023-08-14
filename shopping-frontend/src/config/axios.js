import axios from 'axios';


const axiosInstance = axios.create({
	baseURL: "http://localhost:5000/",
	timeout: 15000,
	headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
});

export {axiosInstance};