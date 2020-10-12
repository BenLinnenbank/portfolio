import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

export function Menu() {

    return (
        <>
            <div className="link-item">
                <NavLink>
                    <Link to="/">Home</Link>
                </NavLink>
            </div>
            <div className="link-item">
                <NavLink>
                    <Link to="/about/">About</Link>
                </NavLink>
            </div>
            <div className="link-item">
                <NavLink>
                    <Link to="/gallery/">Gallery</Link>
                </NavLink>
            </div>
            <div className="link-item">
                <NavLink>
                    <Link to="/contact/">Contact</Link>
                </NavLink>
            </div>
        </>
    );
}
