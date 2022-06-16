import axiosClient from "./axiosClient";

const api_test = {
    post_api: (url,data) => {
        return axiosClient.post(url, data); 
    }
}

export default api_test