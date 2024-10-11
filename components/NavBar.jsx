import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { getCategories } from "../firebase/db"

function NavBar(){
const[categories, setCategories] = useState([])

useEffect (() => {
    const uniqueCategories = getCategories()
    uniqueCategories.then((value)=>{
        setCategories(value)
    })
}, [])

    return(
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand to='/' as={Link}>CawaCommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="Categorias" id="collapsible-nav-dropdown">
                    {categories.map((category, index)=>(<NavDropdown.Item key={index} to={`category/${category}`} as={Link}>{category}</NavDropdown.Item>))}
                </NavDropdown>
                </Nav>
                <Link to='/cart'>
                    <CartWidget/>
                </Link>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar