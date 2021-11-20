import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./components/initialPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<InitialPage/>} exact/>
            </Routes>
        </BrowserRouter>
    );
}