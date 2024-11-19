import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import userStore from "../utils/userStore";
import {postUser, putUser} from "../utils/api";
import {User} from "../utils/user";
import store from "../utils/userStore";
import styles from "./Welcome.module.css";
import axios from "axios";

export default function Welcome(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function handleLogin(e){
        e.preventDefault();
        console.log(username, password);
        store.dispatch({type: "UPDATE_USER_DATA", username: username, password: password});
        console.log(store.getState());
        const res  = await  putUser(userStore.getState());
            // .then(() => {
                console.log(res);
                const user = new User(res.username, res.password, true);
                console.log(user.isLoggedIn);
                console.log(user.username);
                store.dispatch({type: "UPDATE_USER_DATA", username: res.username, password: res.password, isLoggedIn: user.isLoggedIn});
                console.log(userStore.getState().username);
                localStorage.setItem("user", JSON.stringify(userStore.getState()));
                localStorage.setItem("accessToken", res.message.message);
                axios.defaults.withCredentials = true;
                axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
                console.log(JSON.stringify(store.getState()));
                console.log(localStorage.getItem("accessToken"));
                // localStorage.setItem("authToken", res.data.token);
        console.log('localStorage:' + localStorage.getItem("accessToken") + typeof(localStorage.getItem("accessToken")));
                navigate("/main")
            // })
        // console.log(res.data)
    }
    async function handleRegister(){
        store.dispatch({type: "UPDATE_USER_DATA", username: username, password: password});
        console.log(store.getState());
        const res = postUser(store.getState())
            .then(() => {
                console.log(res);
                const user = new User(res.username, res.password, true);
                console.log(user.isLoggedIn);
                console.log(user.username);
                store.dispatch({type: "UPDATE_USER_DATA", username: res.username, password: res.password, isLoggedIn: user.isLoggedIn});
                console.log(userStore.getState().username);
                localStorage.setItem("user", JSON.stringify(userStore.getState()));
                localStorage.setItem("accessToken", res.message.message);
                axios.defaults.withCredentials = true;
                axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
                console.log(JSON.stringify(store.getState()));
                console.log(localStorage.getItem("accessToken"));
                // localStorage.setItem("authToken", res.data.token);
                console.log('localStorage:' + localStorage.getItem("accessToken") + typeof(localStorage.getItem("accessToken")));
                navigate("/main")
                }
            )
            .catch(() => {
            })
        // console.log(res)
    }
return(
    <html>
    <head>

    </head>

    <body className={styles.container}>
    <header className={styles.titleContainer}>
        <h1 id="h1">Мартышов Данила Викторович, Р3207, Вариант 409091</h1>
    </header>
    <div className={styles.loginBox}>
        <InputText onInput={(e) => {
            e.preventDefault();
            setUsername(e.target.value)
        }} value={username} className={styles.input} placeholder={"enter your username"}/>
        <InputText  type={"password"} onInput={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
        }} value={password} className={styles.input} placeholder={"enter your password"}/>
        <Button className={styles.button} type={"button"} onClick={handleLogin} children={"login"}/>
        <Button className={styles.button} type={"button"} onClick={handleRegister} children={"register"}/></div>
    <div className={styles.container}>

    </div>
    </body>
    </html>
)
}