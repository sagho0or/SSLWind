import {
    AddressParamInterface,
    AddressResponseInterface
} from "@/store/deposit/address/address.interface";

export const GET_ADDRESS_SUCCESS = 'GET_ADDRESS_SUCCESS';
export const GET_ADDRESS_LOADING = 'GET_ADDRESS_LOADING';
export const GET_ADDRESS_FAILURE = 'GET_ADDRESS_FAILURE';

export const getAddressSuccess = (response: AddressResponseInterface) => ({
    type: GET_ADDRESS_SUCCESS,
    response
})
export const getAddressLoading = (data: AddressParamInterface) => ({
    type: GET_ADDRESS_LOADING,
    data
})
export const getAddressFailure = (error: any) => ({
    type: GET_ADDRESS_FAILURE,
    error
})