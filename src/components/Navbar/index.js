import React from 'react'
import {Nav, NavContainer , NavLogo} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo href='/'>xIngest</NavLogo>
                    <h1>Hey</h1>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;
