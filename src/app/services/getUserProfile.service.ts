import store from "@/store/store";
import { getUserProfileLoading } from "@/store/userProfile/slice";

function getUserProfileService(reload: boolean) {
    return new Promise(async (resolve, reject) => {
        try {
            const isLogin = localStorage.getItem('isLogin');

            if (!isLogin) {
                reject('User is not logged in');
                return;
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

            if (reload) {
                localStorage.removeItem('userProfile');
                getUserProfileFunc();
            } else if (localItem && Object.keys(localItem).length !== 0) {
                const userProfile = JSON.parse(localItem);
                if (userProfile) {
                    resolve(userProfile);
                } else {
                    getUserProfileFunc();
                }
            } else if (!localItem || Object.keys(localItem).length === 0) {
                getUserProfileFunc();
            }
        } catch (error) {
            reject('Error checking login status');
        }
    });
}

export default getUserProfileService;
