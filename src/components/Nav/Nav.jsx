import React from "react";
import "./Nav.scss"
import { NavLink } from 'react-router-dom'

const setActive = ({ isActive }) => isActive ? 'menu__link menu__link_active' : 'menu__link'
function Nav() {
    return (
        <header className="Nav">
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <NavLink to="." className={setActive}>Home</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="about" className={setActive}>About</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="cars" className={setActive}>Cars</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="courses" className={setActive}>Courses</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;