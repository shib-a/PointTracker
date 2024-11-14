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
                store.dispatch({type: "UPDATE_USER_DATA", username: user.username, password: user.password, isLoggedIn: user.isLoggedIn});
                console.log(userStore.getState().isLoggedIn);
                navigate("main")
            // })
        // console.log(res.data)
    }
    useEffect(() => {
        const checkStatus = async () =>
        {
            const t = store.getState();
            if (t.isLoggedIn) {
                navigate("/main", {replace: true});
            }
        };
        checkStatus();
    },[store, navigate]);
    async function handleRegister(){
        store.dispatch({type: "UPDATE_USER_DATA", username: username, password: password});
        console.log(store.getState());
        const res = postUser(store.getState())
            .then(() => {
                    const userData = res.data;
                    const user = new User(userData.username, userData.password, true);
                    console.log(user.isLoggedIn);
                    store.dispatch({type: "UPDATE_USER_DATA", username: user.username, password: user.password, isLoggedIn: user.isLoggedIn});
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