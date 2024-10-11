import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"
import { getProduct } from "../firebase/db"

function ItemDetailContainer () {
    const [detail, setDetail] = useState([])
    const {id} = useParams()

    useEffect (() => {
        getProduct(id, setDetail)
    }, [id])

    return (
        <>
            <img src={detail.image} style={{width:'300px', height: 'auto'}}/>
            <h3>{detail.name}</h3>
            <div>{detail.description}</div>
            <h3>${detail.price}</h3>
            <ItemCount item={detail}/>
        </>
    )
}

export default ItemDetailContainer