import React from 'react'
import { Link } from 'react-router-dom';
import { Submenu } from './Submenu'

export const Menu = () => {

    return (
        <nav className="menu" tabIndex="0">
            <div className="menu">
                <ul style={{ width: '225px' }} className="mobileMenu">

                    <li className="sliderPadding">
                        <Link to="/info">
                            <p data-i18n-key="index-menu-button-1" className="menu-button-title">Información</p>
                            <img className="change-cursor menu-button-img" src="./img/menu/tabi1.png" name="menu_option_1"
                                onMouseOver={e => (e.currentTarget.src = './img/menu/tabi2.png')} onMouseOut={e => (e.currentTarget.src = './img/menu/tabi1.png')} />
                        </Link>
                    </li>
                    <Submenu></Submenu>
                    <li className="sliderPadding">
                        <Link to="/index">
                            <p data-i18n-key="index-menu-button-3" className="menu-button-title">Índice</p>
                            <img className="change-cursor menu-button-img" src="./img/menu/tabi1.png" name="menu_option_1"
                                onMouseOver={e => (e.currentTarget.src = './img/menu/tabi2.png')} onMouseOut={e => (e.currentTarget.src = './img/menu/tabi1.png')} />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
