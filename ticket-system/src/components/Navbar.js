import React from "react"
import { useNavigate } from "react-router-dom";



export default function Navbar() {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        const loadingDiv = document.getElementById("loading");
        loadingDiv.classList.add("loading");
        setTimeout(() => {
            navigate('/login');
        }, 5000)
    }
    return (
        <nav>
            <h1 id="name">Ticket System</h1>
            <p id="faq" className="button">FAQ</p>
            <p id="contact" className="button">Contact</p>
            <p id="create-new-ticket" className="button">Create new Ticket</p>
            <p id="login" className="button" onClick={handleLoginClick}>Login</p>
        </nav>
    )
}