import axios from "axios";

axios.interceptors.response.use(null, (error) => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedError) {
        alert(error);
        Promise.reject(error);
    }
    console.log(error);
    return error;
});

export default {
    get: axios.get,
    put: axios.put,
    post: axios.post,
    delete: axios.delete
}