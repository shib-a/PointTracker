import axios from "axios";

const url = "http://localhost:8080/api"

export async function postUser(data){
    const result = await axios.post(url+"/users/register",data, {withCredentials: true});
    return result.data;
}
export async function postPoint(data){
    const result = await axios.post(url+"/points/post",data, {withCredentials: true});
    return result.data;
}
export async function getPoints(){
    const result = await axios.get(url+"/points/get", {withCredentials: true});
    return result.data;
}
export async function putUser(data){
    const result = await axios.put(url+"/users/login",data, {withCredentials: true});
    return result.data;
}