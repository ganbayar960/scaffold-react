// import logo from '../../../logo.svg';
// import './Header.scss';
import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import "./Header.css";

class Header extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked })
    }

    render (){
        return (
            <nav className="navBarItems">
                <h1 className="navbar-logo">Scaffold<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' :  'fas fa-bars'}></i>
                </div>
                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                    {MenuItems.map((item, index) => {
                        return (                
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Header
