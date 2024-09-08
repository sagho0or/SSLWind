import axios from "axios";

export default async function logout() {
    try {
        // await axios.post('/api/logout');

        await axios.post('/api/remove-tockens'); 

        console.log("Logged out successfully");
    } catch (error) {
        console.error("Logout failed", error);
    }
}
