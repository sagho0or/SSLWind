import {UserProfileResponseInterface} from "@/store/userProfile/interface";

export const GET_USERPROFILE_SUCCESS = 'GET_USERPROFILE_SUCCESS';
export const GET_USERPROFILE_LOADING = 'GET_USERPROFILE_LOADING';
export const GET_USERPROFILE_FAILURE = 'GET_USERPROFILE_FAILURE';

export const getUserProfileSuccess = (response: UserProfileResponseInterface) => ({
    type: GET_USERPROFILE_SUCCESS,
    response
})
export const getUserProfileLoading = () => ({
    type: GET_USERPROFILE_LOADING
})
export const getUserProfileFailure = (error: any) => ({
    type: GET_USERPROFILE_FAILURE,
    error
})