// import {AppStore} from "@/store/store";
// import {getUserProfileLoading} from "@/store/userProfile/action";
// import {Cookies} from "react-cookie";
// import { configureStore } from '@reduxjs/toolkit';
// import rootSaga from '@/store/saga';
// import rootReducer from '@/store/rootReducer';
// import createSagaMiddleware from 'redux-saga';
// const sagaMiddleware = createSagaMiddleware();
// const store: AppStore = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
// });
// sagaMiddleware.run(rootSaga);
// function getUserProfileService(reload:boolean){
//     return new Promise((resolve, reject) => {
//         const cookies = new Cookies();
//         const isLogin = !!cookies.get('auth-token');
//         if (typeof window == 'undefined') {
//             reject('localhost is not defined')
//         }
//         const localItem = localStorage.getItem('userProfile') || "";
//         function getUserProfileFunc() {
//             store.dispatch(getUserProfileLoading());
//             store.subscribe(() => {
//                 const value = store.getState().userProfile;
//                 if (value && value.isDone && value.response) {
//                     localStorage.setItem('userProfile', JSON.stringify(value.response));
//                     resolve(value.response);
//                 }
//             });
//         }
//         if(reload){
//             localStorage.removeItem('userProfile');
//             getUserProfileFunc()
//         }else if (localItem && Object.keys(localItem).length !== 0 && isLogin) {
//             const userProfile = JSON.parse(localItem);
//             if (userProfile) {
//                 resolve(userProfile);
//             } else {
//                 getUserProfileFunc();
//             }
//         } else if (!localItem || Object.keys(localItem).length === 0 && isLogin) {
//             getUserProfileFunc()
//         } else if (localItem && !isLogin) {
//             localStorage.removeItem('userProfile')
//         } else {
//             reject('not login and no userProfile')
//         }
//     })
// }
// export default getUserProfileService;
