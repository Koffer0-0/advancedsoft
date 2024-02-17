import axios from "axios";
import router from "@/router";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// axiosInstance.interceptors.response.use((response) => {
//     return response;
// }, async (err) => {
//     const originalConfig = err.config;
//
//     if (err.response) {
//         if (err.response.status === 401 && !originalConfig._retry) {
//             console.log("1");
//             originalConfig._retry = true;
//
//             const payload = {
//                 refresh_token: localStorage.getItem('refresh_token'),
//             };
//
//             // const response = await axiosInstance.post(LMS + 'auth/refresh', payload);
//             const response = await fetch(LMS + 'auth/refresh', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(payload)
//             });
//             console.log("response: ", response);
//
//             // if (response.status === 201) {
//             if (response.ok) {
//                 console.log("response.ok?");
//                 // const data = await response.data.result;
//                 const data = await response
//                 console.log("data: ", data);
//                 // localStorage.setItem('access_token', data.access_token);
//                 // localStorage.setItem('refresh_token', data.refresh_token);
//                 localStorage.setItem('access_token', data.result.access_token);
//                 localStorage.setItem('refresh_token', data.result.refresh_token);
//
//                 // return axiosInstance(err.config);
//             } else {
//                 console.log("else");
//                 localStorage.removeItem('access_token');
//                 localStorage.removeItem('refresh_token');
//
//                 router.push({path: '/login'});
//             }
//             return axiosInstance(originalConfig);
//         }
//     }
//
//     return Promise.reject(err);
// });

export default axiosInstance;
