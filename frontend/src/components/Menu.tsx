import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

export function Menu() {

    return (
        <div className="menu-container">
            <Navbar color="faded" light>
                <Nav navbar>
                    <NavItem>
                        <div className="border-bottom link-item">
                            <NavLink>
                                <Link to="/">Home</Link>
                            </NavLink>
                        </div>
                    </NavItem>
                    <NavItem>
                        <div className="border-bottom link-item">
                            <NavLink>
                                <Link to="/about/">About</Link>
                            </NavLink>
                        </div>
                    </NavItem>
                    <NavItem>
                        <div className="link-item">
                            <NavLink>
                                <Link to="/gallery/">Gallery</Link>
                            </NavLink>
                        </div>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}
