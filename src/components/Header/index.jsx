import React from 'react';
import './style.css';
import logo from './assets/logo.png';

const Header = () => (
        <header class="header">
        <img src={logo} alt="logo" class="img" />
        <input type="search" placeholder="Buscar produtos, marcas e muito mais…" maxlength="120"  class="input" ></input>
        <h2>Baixe grátis o app do Mercado Livre</h2>       
        </header>
);

export default Header;