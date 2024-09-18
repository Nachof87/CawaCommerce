import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

function NavBar(){
const[categories, setCategories] = useState([])

useEffect (() => {
    fetch('https://dragonball-api.com/api/characters?limit=100')
        .then(res => res.json())
        .then(res => setCategories(Array.from(new Set(res.items.map(item => item.race)))))
}, [])

    return(
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand to='/' as={Link}>CawaCommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="Categories" id="collapsible-nav-dropdown">
                    {categories.map(race =>(
                        <NavDropdown.Item to={`race/${race}`} key={race} as={Link}>{race}</NavDropdown.Item>
                    ))}
                </NavDropdown>
                </Nav>
                    <CartWidget/>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar