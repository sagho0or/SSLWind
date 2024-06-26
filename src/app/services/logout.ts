import {Cookies} from "react-cookie";

export default function logout(){
    const cookies = new Cookies();
    cookies.remove("auth-token")
    cookies.remove("auth-refresh")
    localStorage.removeItem("userProfile");


}