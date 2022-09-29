import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./RouterPages/Home";
function AppRouter(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home /> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default AppRouter;