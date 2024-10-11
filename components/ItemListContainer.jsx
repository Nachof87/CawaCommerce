import { useState, useEffect } from "react"
import Row  from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getProducts, getProductsFromCategory } from "../firebase/db"

function ItemListContainer(){
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect (() => {
        id ? getProductsFromCategory(id, setItems) : getProducts(setItems)
    }, [id])

    return(
        <Container  className="mt-5">
                <Row className="g-4 align-items-start">
                    <ItemList items={items}/>
                </Row>
        </Container>

    )
}

export default ItemListContainer