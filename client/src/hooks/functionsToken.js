import { Axios } from "axios";

const TOKEN_KEY = "COFFEE_TOKEN";

export function setToken (token) {
    localStorage.setItem(TOKEN_KEY, token)
};
export function getToken () {
    let ls = localStorage.getItem('token');
    console.log(ls);

};  
export function deleteToken () {
    localStorage.removeItem(TOKEN_KEY)
}; 

export function initAxiosInterceptor (){
    Axios.interceptors.request.use(function (config){
        const token = getToken();
        if(token){
            config.headers.Authorization = `bearer ${token}`;
        };
        return config;
    });
    Axios.interceptors.response.use(
        (response)=>response,
        (error)=>error
    );
};

