import {Cookies} from "react-cookie";

export default function logout(){
    const cookies = new Cookies();
    var b = cookies.get("auth-token");
    debugger;

    cookies.remove("auth-token")
    cookies.remove("auth-refresh")
    localStorage.removeItem("userProfile");

    var a = cookies.get("auth-token");

}