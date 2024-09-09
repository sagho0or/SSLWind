import axios from "axios";

export default async function logout() {
    try {
        // await axios.post('/api/logout');

        await axios.post('/api/remove-tockens'); 

        localStorage.removeItem("isLogin");
        localStorage.removeItem("userProfile");
        console.log("Logged out successfully");
    } catch (error) {
        console.error("Logout failed", error);
    }
}
