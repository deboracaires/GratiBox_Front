import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./components/initialPage.js";
import LoginPage from "./components/loginPage.js";
import SignUp from "./components/signUp.js";
import UserContext from "./contexts/userContext.js";
import { getSignature } from "./services/api.services.js";

export default function App() {
    
    const [user, setUser] = useState({});
    const [dataSignature, setDataSignature] = useState({});

    function verifySignature () {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        getSignature(config)
            .then((res) => setDataSignature(res.data))
            .catch((err) => console.log(err));
    }
    console.log(dataSignature);
    return (
        <BrowserRouter>
            <UserContext.Provider value={{user, setUser}}>
                <Routes>
                    <Route path = '/' element = {<InitialPage/>} exact/>
                    <Route path = '/cadastro' element = {<SignUp/>} exact/>
                    <Route path = '/login' element = {<LoginPage verifySignature = {verifySignature}/>} exact/>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}