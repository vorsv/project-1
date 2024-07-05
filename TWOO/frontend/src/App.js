import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import './App.css'
import { useEffect, useState } from "react";

function App() {
    const [loggedIn , setLoggedIn] = useState(false)
    const [email, setEmail] = useState("")

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email}/>} />
                    <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;