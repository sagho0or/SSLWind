import axios from "axios";
import {Cookies} from 'react-cookie';
import errorHandling from "@/store/_utils/errorHandling";

const axiosInterceptorInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosInterceptorInstance.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem('isLogin');
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
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
        
        const isLogin = localStorage.getItem('isLogin');
        
        if (status === 401 && !originalRequest._retry && isLogin) {
            localStorage.removeItem('isLogin');
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
                    localStorage.setItem('isLogin', response?.data?.message?.token);
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