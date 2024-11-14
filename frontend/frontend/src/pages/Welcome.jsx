import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import userStore from "../utils/userStore";
import {postUser, putUser} from "../utils/api";
import {User} from "../utils/user";
import store from "../utils/userStore";
import styles from "./Welcome.module.css";

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
                console.log(JSON.stringify(store.getState()));
                navigate("main")
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
                console.log(JSON.stringify(store.getState()));
                navigate("main")
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
    <body className={styles.body}>
    <div className={styles.container}>
        <InputText onInput={(e) => setUsername(e.target.value)} value={username} className={styles.inputField}/>
        <Password onInput={(e)=>setPassword(e.target.value)} value={password} className={styles.inputField}/>
    </div>
    <div className={styles.buttonContainer}>
        <Button className={styles.button} type={"button"} onClick={handleLogin} children={"login"}/>
        <Button className={styles.button} type={"button"} onClick={handleRegister} children={"register"}/>
    </div>
    </body>
    </html>
)
}