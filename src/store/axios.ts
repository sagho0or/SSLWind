import axios from "axios";
import {Cookies} from 'react-cookie';
import errorHandling from "@/store/_utils/errorHandling";

const axiosInterceptorInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosInterceptorInstance.interceptors.response.use(
    response => response,
    error => {
        
        const status = error.response ? error.response.status : null;
        const cookies = new Cookies();
        const originalRequest = error.config;
        const isLogged =  cookies.get('auth-refresh')
        if (status === 401 && !originalRequest._retry && isLogged) {
            
            debugger;
            // Handle unauthorized access
            originalRequest._retry = true;
            cookies.remove('auth-token')
            try {
                axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/login/refresh/token/`,
                    {
                        refresh_token: cookies.get('auth-refresh')
                    },
                    {
                        timeout: Number(process.env.API_TIME_OUT)
                    }).then((response) => {
                    cookies.set('auth-token', response?.data?.message?.token)
                    cookies.set('auth-refresh', response?.data?.message?.refresh_token);
                    originalRequest.headers['Authorization'] = 'Bearer ' + response?.data?.message?.token;
                    return axios(originalRequest)
                })
            } catch (error) {
            }
        } else if (status === 404) {
            // Handle not found errors
        } else if(status!== 401) {
            debugger;
            // Handle other errors
            errorHandling(error)
        }

        return Promise.reject(error);
    }
);

export default axiosInterceptorInstance;