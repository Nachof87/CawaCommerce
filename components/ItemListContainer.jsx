/*
function ItemListContainer(){
    return(

        <div className="class-ItemListContainer"
        >
            <h1>Proximamente</h1>
        </div>

    )
}

export default ItemListContainer
*/

import { useState, useEffect } from "react"
import Row  from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer(){
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect (() => {
        fetch("https://dragonball-api.com/api/characters?limit=100")
            .then(res => res.json())
            .then(res => {
                if(!id){
                    setItems(res.items)
                } else {
                    const characterByRace = res.items.filter(item => item.race === id)
                    setItems(characterByRace)
                }

            })
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