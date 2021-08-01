import http from "../httpHandle";
import handleServerError from "../handleServerError";
import { setToken } from "../localStorage";
const route = process.env.REACT_API_URL + "/login";
export async function login(email, password) {
    const response = await http.get(route, { email: email, password: password });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    setToken(response.data.token);
    return { data: response.data.token, error: null };
}