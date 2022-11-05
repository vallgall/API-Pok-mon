import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container } from 'react-bootstrap';
import { LogoutButton } from "../Logout";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Pokémon</Navbar.Brand>
                    </LinkContainer>
                    <LogoutButton/>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
