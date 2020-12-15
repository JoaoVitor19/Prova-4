import React from 'react';
import './index.css';
import Logo from '../../assets/Logo.png'
import {Link} from 'react-router-dom'

function Menu() {

    return (
        <>
            <div className="home-menu">
                <div className="home-left">
                    <img src={Logo} width="180px" />
                </div>
                <div className="home-right">
                <Link to="/">
                    <h2>Inicio</h2>
                </Link>
                <Link to="/">
                    <h2>Preços</h2>
                </Link>
                <Link to="/">
                    <h2>Sobre Nós</h2>
                </Link>
                <Link to="/cadastro">
                    <h2> Cadastro</h2>
                </Link>
                </div>
            </div>
        </>
    );
}

export default Menu;