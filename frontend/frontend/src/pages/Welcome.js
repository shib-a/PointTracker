import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import userStore from "../utils/userStore";
import {postUser, putUser} from "../utils/api";
import {User} from "../utils/user";
import store from "../utils/userStore";
export default function Welcome(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function handleLogin(){
        console.log(username, password);
        store.dispatch({type: "UPDATE_USER_DATA", username: username, password: password});
        console.log(store.getState());
        const res = putUser(store.getState());
        const userDTO = res.map()
        if(res.)
        console.log(res)
    }

    useEffect(() => {
        userStore.getState()
    }, []);
return(
    <html>
    <head>

    </head>
    <body>
    <InputText onInput={(e) => setUsername(e.target.value)} value={username}/>
    <Password onInput={(e)=>setPassword(e.target.value)} value={password}/>
    <Button type={"button"} onClick={handleLogin} children={"login"}/>
    </body>
    </html>
)
}