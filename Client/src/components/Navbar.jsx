import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

const Navbar= () =>{
    return(
        <header class="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand"><h1>Gamebox</h1></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/Biblioteca">Biblioteca</a>
                        </li>
                        <li class="nav-item">
                            <div className='user-icon'>
                                <a class="nav-link float-right" href="/Perfil">Perfil</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar