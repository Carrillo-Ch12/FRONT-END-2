import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"


export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <Link to = "/Biblioteca" className="title">Gamebox</Link>
            <div className="menu" onClick={()=>{
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className= {menuOpen ? "open" : ""}>
                <li>
                    <NavLink to = "/Biblioteca">Biblioteca</NavLink>
                </li>
                <li>
                    <NavLink to= "/Perfil">Perfil</NavLink>
                </li>
                <li>
                    <NavLink to = "/Lista_juegos">Lista de juegos</NavLink>
                </li>
                <li>
                    <NavLink to = "/">Cerrar sesion</NavLink>
                </li>
                
            </ul>
        </nav>
    );
}

export default Navbar;
