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
const store = createStore(authReducer)
export default store;