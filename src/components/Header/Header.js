// import logo from '../../../logo.svg';
// import './Header.scss';
import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import "./Header.css";
import { Link } from 'react-router-dom';

class Header extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked })
    }

    render (){
        return (
            <nav className="navBarItems">
                <Link to="/" style={{textDecoration : "none"}}><h1 className="navbar-logo">Scaffold<i className="fab fa-react"></i></h1></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' :  'fas fa-bars'}></i>
                </div>
                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                    {MenuItems.map((item, index) => {
                        return (                
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Header
