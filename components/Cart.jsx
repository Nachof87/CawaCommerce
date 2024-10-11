import { useCartContext } from "../context/cartContext"
import { 
    ListGroup
    ,Badge
    ,Button
    ,Container
    ,Row
    ,Col
    ,Toast
    ,Card 
} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Cart() {
    const { cart, emptyCart, deleteProductFromCart } = useCartContext()
    const navigate = useNavigate()
    const [showMessage, setShowMessage] = useState(false)

    const goCheckout = () => {
        if (cart.length > 0) {
            navigate('/checkout')
        } else {
            setShowMessage(true)
        }
    }

    const totalPrice = cart.reduce((total, prod) => total + (prod.price * prod.qty), 0)

    return (
        <Container className="my-4">
            <h3 className="text-center mb-4">Resumen de la compra:</h3>
            <Card className="p-3">
                <ListGroup>
                    {cart.length > 0 ? (
                        cart.map(prod => (
                            <ListGroup.Item key={prod.id} className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{prod.name}</h5>
                                    <Badge bg="primary" pill className="ms-2">
                                        {prod.qty}
                                    </Badge>
                                    <span className="ms-2 text-muted">Precio total: ${prod.price * prod.qty}</span>
                                </div>
                                <Button variant="danger" size="sm" onClick={() => deleteProductFromCart(prod.id)}>
                                    Eliminar
                                </Button>
                            </ListGroup.Item>
                        ))
                    ) : (
                        <ListGroup.Item className="text-center">
                            <h6>El carrito está vacío.</h6>
                        </ListGroup.Item>
                    )}
                </ListGroup>
                {cart.length > 0 && (
                    <div className="mt-3 text-end">
                        <h5>Total: ${totalPrice.toFixed(2)}</h5>
                    </div>
                )}
            </Card>
            <Row className="mt-4">
                <Col className="text-center">
                    <Button variant="secondary" onClick={emptyCart} className="me-2">
                        Vaciar carrito
                    </Button>
                    <Button variant="success" onClick={goCheckout}>
                        Realizar la compra
                    </Button>
                </Col>
            </Row>
            {showMessage && (
                <Toast onClose={() => setShowMessage(false)} className="mt-3">
                    <Toast.Body>No puedes proceder a la compra, el carrito está vacío.</Toast.Body>
                </Toast>
            )}
        </Container>
    )
}

export default Cart