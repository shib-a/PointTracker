import {createStore} from "redux";
import {User} from "./user";

const authReducer = (user = new User("",""), action) =>{
    switch (action.type){
        case "UPDATE_USER_DATA": {
            // const data = action.payload;
            user.username=action.username
            user.password=action.password;
            user.isLoggedIn=action.isLoggedIn;
            return user;
            // return user.isLoggedIn = true
        }
        case "LOGOUT": return user;
        default: return user;
    }
};
const nullUser = {username: "", password: "", isLoggedIn: false};
const loadState = () =>{
    try{
        const data = localStorage.getItem("user");
        if(data==null){
            return nullUser;
        }
        return JSON.parse(data)
    } catch (e){
        localStorage.setItem("user", JSON.stringify(nullUser));
    }
};
const saveState = (user) =>{
    try {
        localStorage.setItem("user", JSON.stringify(user));
    } catch (e){}
}
const user = loadState();
const store = createStore(authReducer, user);
store.subscribe(() =>{
    saveState(store.getState());
})
export default store;