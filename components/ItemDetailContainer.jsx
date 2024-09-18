import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function ItemDetailContainer () {
    const [detail, setDetail] = useState([])
    const {id} = useParams()

    useEffect (() => {
        fetch(`https://dragonball-api.com/api/characters/${id}`)
            .then(res => res.json())
            .then(res => setDetail(res))
    }, [id])

    return (
        <>
            <div>{detail.name}</div>
            <div>{detail.description}</div>
        </>
    )
}

export default ItemDetailContainer