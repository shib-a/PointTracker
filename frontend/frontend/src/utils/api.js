import axios from "axios";

const url = "http://localhost:8080/api"

export async function postUser(data){
    const result = await axios.post(url+"/users/register",data);
    return result.data;
}
export async function postPoint(data){
    const result = await axios.post(url+"/points",data);
    return result;
}
export async function getPoints(){
    const result = await axios.post(url+"/users");
    return result;
}