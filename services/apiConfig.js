import axios from "axios";

export const signUp = params => {
    return axios({
        method: "post",
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3su-U5FXZtNw1hmCrrScBbl0_Ihs9Njs',
        headers: {
            "Content-Type": "application/json"
        },
        data: params
    })
}
export const signIn = params => {
    return axios({
        method: "post",
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3su-U5FXZtNw1hmCrrScBbl0_Ihs9Njs',
        headers: {
            "Content-Type": "application/json"
        },
        data: params
    })
}