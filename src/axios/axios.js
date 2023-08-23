import axios from 'axios';
import {toast} from "react-toastify";

export const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.token ? user.token.replaceAll('"', '') : null
}

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_AUTH, // Replace with your API base URL
});


// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Modify the request config here (add headers, authentication tokens)

        const token = getToken();
        // If token is present add it to request's Authorization Header
        if (token) {
            if (config.headers) config.headers.Authorization = 'Bearer' + ' ' + token;
        }
        return config;
    },
    (error) => {
        // Handle request errors here

        return Promise.reject(error);
    }
);


// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Modify the response data here
        console.log(response)
        return response;
    },
    (error) => {
        // Handle response errors here
        console.log(error)

        if (error.response.status === 401) {

            const resolveAfter3Sec = new Promise(resolve => setTimeout(() => {
                resolve()
                window.location.href = '/'
            }, 3000));

            toast.promise(
                resolveAfter3Sec,
                {
                    pending: {
                        render() {
                            return "token Expired Redirecting to login"
                        },
                        theme: 'colored',
                        type: 'error',
                        hideProgressBar: false,
                    },
                }
            )

            // toast('token Expired Redirecting to login', {
            //     type: 'error',
            //     theme: 'colored',
            //     autoClose: 5000,
            //     onClose: () => {
            //         console.log('closed')
            //     }
            // })

        }

        return Promise.reject(error);
    }
);

export default axiosInstance;