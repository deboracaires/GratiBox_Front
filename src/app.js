import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./components/initialPage.js";
import LoginPage from "./components/loginPage.js";
import SignUp from "./components/signUp.js";
import UserContext from "./contexts/userContext.js";

export default function App() {
    
    const [user, setUser] = useState({});

    return (
        <BrowserRouter>
            <UserContext.Provider value={{user, setUser}}>
                <Routes>
                    <Route path = '/' element = {<InitialPage/>} exact/>
                    <Route path = '/cadastro' element = {<SignUp/>} exact/>
                    <Route path = '/login' element = {<LoginPage/>} exact/>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}