import axios from "axios";
import {Cookies} from 'react-cookie';
import errorHandling from "@/store/_utils/errorHandling";


const axiosInterceptorInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
let tokenCache: any = null;

axiosInterceptorInstance.interceptors.request.use(
    async (config) => {
        if (!tokenCache as any) {
            debugger;
            const response = await fetch("/api/auth/checkToken");
            const data = await response.json();
            tokenCache = data.token?.value;  // Save the token in cache
        }

        if (tokenCache) {
            config.headers['Authorization'] = `Bearer ${tokenCache}`;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axiosInterceptorInstance.interceptors.response.use(
    response => response,
    async error => {
        
        const status = error.response ? error.response.status : null;
        const cookies = new Cookies();
        const originalRequest = error.config;
        
        const response = await fetch("/api/auth/checkLogin");
        const data = await response.json();
        
        if (status === 401 && !originalRequest._retry && data.isLogin) {
            
            // Handle unauthorized access
            originalRequest._retry = true;
            
            try {
                axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/login/refresh/token/`,
                    {
                        refresh_token: cookies.get('auth-refresh')
                    },
                    {
                        timeout: Number(process.env.API_TIME_OUT)
                    }).then((response) => {
                        axios.post("/api/set-tokens", {
                            token: response?.data?.message?.token,
                            refreshToken: response?.data?.message?.refresh_token
                          });
                    originalRequest.headers['Authorization'] = 'Bearer ' + response?.data?.message?.token;
                    return axios(originalRequest)
                })
            } catch (error) {
            }
        } else if (status === 404) {
            // Handle not found errors
        } else if(status!== 401) {
            // Handle other errors
            errorHandling(error)
        }

        return Promise.reject(error);
    }
);

export default axiosInterceptorInstance;