import '../App.css';
import "react-router-dom";
import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import Main from "./Main";
import Welcome from "./Welcome";
import NotFound from "./NotFound";
import userStore from "../utils/userStore";
import store from "../utils/userStore";
import axios from "axios";
import {User} from "../utils/user";

function App() {
    // localStorage.setItem("accessToken", null);
   return(
       <Router>
           <Routes>
               <Route path={"/main"} element={
                   localStorage.getItem("accessToken")!=="null"?(<Main/>):(
                   <Navigate to="/" replace/>
               )
               }/>
               <Route path={"/"} element={
                   (<Welcome/>)}/>
               <Route path={"*"} element={<NotFound/>}/>
           </Routes>
       </Router>
   );
}

export default App;