import store from "@/store/store";
import { getUserProfileLoading } from "@/store/userProfile/slice";
import {Cookies} from "react-cookie";

function getUserProfileService(reload:boolean){
    return new Promise((resolve, reject) => {
        const cookies = new Cookies();
        const isLogin = !!cookies.get('auth-token');
        if (typeof window == 'undefined') {
            reject('localhost is not defined')
        }
        const localItem = localStorage.getItem('userProfile') || "";

        function getUserProfileFunc() {
            store.dispatch(getUserProfileLoading());
            const unsubscribe = store.subscribe(() => {
              const value = store.getState().userProfile;
              if (value.isDone) {
                unsubscribe();
                if (value.data) {
                  localStorage.setItem('userProfile', JSON.stringify(value.data));
                  resolve(value.data);
                } else {
                  reject('Failed to fetch user profile');
                }
              } else if (value.hasError) {
                unsubscribe();
                reject('Error fetching user profile');
              }
            });
          }

        if(reload){
            localStorage.removeItem('userProfile');
            getUserProfileFunc()
        }else if (localItem && Object.keys(localItem).length !== 0 && isLogin) {
            const userProfile = JSON.parse(localItem);
            if (userProfile) {
                resolve(userProfile);
            } else {
                getUserProfileFunc();
            }
        } else if (!localItem || Object.keys(localItem).length === 0 && isLogin) {
            getUserProfileFunc()
        } else if (localItem && !isLogin) {
            localStorage.removeItem('userProfile')
        } else {
            reject('not login and no userProfile')
        }
    })
}

export default getUserProfileService;

