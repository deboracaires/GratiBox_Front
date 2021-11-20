import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./components/initialPage.js";
import SignUp from "./components/signUp.js";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<InitialPage/>} exact/>
                <Route path='/cadastro' element={<SignUp/>} exact/>
            </Routes>
        </BrowserRouter>
    );
}