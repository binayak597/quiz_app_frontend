import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_URL;

// axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

/** get server data */

export const getServerData = async () => {
    try {
        const data = await axios.get(`${baseUrl}/user/questions`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

/** post Result data */

export const postResultData = async (resultData) => {
    try {
        const data = await axios.post(`${baseUrl}/user/result`, resultData);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getUserResult = async() => {
    try {
       const data = await axios.get(`${baseUrl}/user/result`);
       return data; 
    } catch (error) {
        console.log(error);
    }
}


