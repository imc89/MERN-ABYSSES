import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Submenu = () => {


    const subMenu = () => {
        document.getElementById('slider').classList.toggle('closed');
        if (document.querySelector("#slider").classList.contains('closed')) {
            document.querySelector("#slider").style.visibility = 'visible';
            document.querySelector(".sliderp").style.paddingBottom = '0px'
            document.querySelector(".left-column").style.marginBottom = "480px"
        } else {
            document.querySelector("#slider").style.visibility = 'hidden';
            document.querySelector(".left-column").style.marginBottom = "330px"
        }
    }

    return (
        <li className="sliderp sliderPadding" onClick={subMenu}>
            <p data-i18n-key="index-menu-button-2" className="menu-button-title">Zonas</p>
            <img className="change-cursor menu-button-img" src="./img/menu/tabi1.png" name="menu_option_1"
                onMouseOver={e => (e.currentTarget.src = './img/menu/tabi2.png')} onMouseOut={e => (e.currentTarget.src = './img/menu/tabi1.png')} />

            <ul className="slider" id="slider">
                <Link  to="/gallery" state={{ fromHome: { zone: 'mesopelagica' } }} className="menu-item" style={{ textDecoration: 'none' }}><li>MESOPELÁGICA</li></Link>
                <Link to="/gallery" state={{ fromHome: { zone: 'batipelagica1' } }} className="menu-item" style={{ textDecoration: 'none' }}><li>BATIPELÁGICA ALTA</li></Link>
                <Link to="/gallery" state={{ fromHome: { zone: 'batipelagica2' } }} className="menu-item" style={{ textDecoration: 'none' }}><li>BATIPELÁGICA BAJA</li></Link>
                <Link to="/gallery" state={{ fromHome: { zone: 'abisal' } }} className="menu-item" style={{ textDecoration: 'none' }}><li>ABISAL</li></Link>
                <Link to="/gallery" state={{ fromHome: { zone: 'hadal' } }} className="menu-item" style={{ textDecoration: 'none' }}><li>HADAL</li></Link>
            </ul>
        </li>
    )
}
