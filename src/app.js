import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./components/initialPage.js";
import LoginPage from "./components/loginPage.js";
import PlansPage from "./components/plansPage.js";
import PrincipalPage from "./components/principalPage.js";
import SignAdressPage from "./components/signAddressPage.js";
import SignPlanPage from "./components/signPlanPage.js";
import SignUp from "./components/signUp.js";
import SignContext from "./contexts/signContext.js";
import UserContext from "./contexts/userContext.js";

export default function App() {
    
    const [user, setUser] = useState({});
    const [sign, setSign] = useState({});

    return (
        <BrowserRouter>
            <UserContext.Provider value={{user, setUser}}>
                <SignContext.Provider value = {{sign, setSign}}>
                    <Routes>
                        <Route path = '/' element = {<InitialPage/>} exact/>
                        <Route path = '/cadastro' element = {<SignUp/>} exact/>
                        <Route path = '/login' element = {<LoginPage/>} exact/>
                        <Route path = '/planos' element = {<PlansPage/>} exact/>
                        <Route path = '/assinar-plano' element = {<SignPlanPage/>} exact/>
                        <Route path = '/assinar-plano-endereco' element = {<SignAdressPage/>} exact/>
                        <Route path = '/pagina-principal' element = {<PrincipalPage/>} exact/>
                    </Routes>
                </SignContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    );
}