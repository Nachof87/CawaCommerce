import { useState } from "react"
import { useCartContext } from "../context/cartContext"
import { 
    Button
    ,InputGroup
    ,FormControl
    ,Row
    ,Col
 } from "react-bootstrap"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"


function ItemCount ({ item }) {
    const[count, setCount] = useState(1)
    const { addToCart } = useCartContext()
    const navigate = useNavigate()

    const add = () => setCount(count + 1)
    const subtract = () => {
            if(count > 1) setCount(count - 1)
        }
    const handleAddToCart = () => {
        addToCart({...item, qty: count})

        Swal.fire({
            title: 'Producto agregado al carrito',
            text: `${item.name} x${count}`,
            icon: 'success',
            confirmButtonText: 'Volver a la tienda',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/')
            }
        })
    }

    return(
        <div className="mt-4 text-center">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <InputGroup className="mb-2">
                        <Button variant="outline-secondary" onClick={subtract}>-</Button>
                        <FormControl 
                            type="text" 
                            value={count} 
                            readOnly 
                            className="text-center"
                        />
                        <Button variant="outline-secondary" onClick={add}>+</Button>
                    </InputGroup>
                </Col>
            </Row>
            <Button variant="success" onClick={handleAddToCart}>
                Agregar al carrito
            </Button>
        </div>
    )
}

export default ItemCount