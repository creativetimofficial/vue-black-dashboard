import axios from "axios";

const isAuthenticated = () => {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem("auth_token");

        if (!token) {
            return reject();
        }
        
        axios.get(`${process.env.VUE_APP_BASE_API_URL}/authenticated`, {
            headers: {
                Authorization: token
            }
        }).then(() => {
            resolve();
        }).catch(() => {
            reject();
        })
        
    })
}

export {isAuthenticated};