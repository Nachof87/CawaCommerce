import {
    Container,
    Row,
    Col,
    Button,
    Form,
    ListGroup
} from 'react-bootstrap'
import { useCartContext } from '../context/cartContext'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/db'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function Checkout() {
    const { cart, getTotal, emptyCart } = useCartContext()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const phone = e.target.phone.value

        const order = {
            buyer: { name, email, phone },
            items: cart,
            date: serverTimestamp(),
            total: getTotal(),
        }

        const orderId = createOrder(order)

        orderId.then((value) => {
            Swal.fire({
                title: "¡Gracias por su compra!",
                text: "El id de tu orden es: " + value,
                icon: "success"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/')
                    emptyCart()
                }
            })
        })
    }

    return (
        <Container>
            <Row>
                <Col>
                    <ListGroup>
                        <h3>Resumen de la compra:</h3>
                        {cart.map(prod => (
                            <ListGroup.Item key={prod.id}>
                                {prod.name} x {prod.qty} 
                                <span className="float-end">${(prod.price * prod.qty).toFixed(2)}</span>
                            </ListGroup.Item>
                        ))}
                        <ListGroup.Item>
                            <strong>Total:</strong>
                            <span className="float-end">${getTotal().toFixed(2)}</span>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <h3>Datos para la compra:</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" placeholder="Teléfono" required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Confirmar compra
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout