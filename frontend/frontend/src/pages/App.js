import '../App.css';
import "react-router-dom";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Main from "./Main";
import Welcome from "./Welcome";
import NotFound from "./NotFound";

function App() {
   return(
       <Router>
           <Routes>
               <Route path={"/main"} element={<Main/>}/>
               <Route path={"/login"} element={<Welcome/>}/>
               <Route path={"*"} element={<NotFound/>}/>
           </Routes>
       </Router>
   );
}

export default App;