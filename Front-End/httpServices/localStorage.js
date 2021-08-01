export function setToken(value) {
    localStorage.setItem("x-auth-token", value);
}
export function getToken() {
    if (localStorage.getItem("x-auth-token"))
        return localStorage.getItem("x-auth-token");
    return null;
}
export function removeToken() {
    if (localStorage.getItem("x-auth-token"))
        localStorage.removeItem("x-auth-token");
}