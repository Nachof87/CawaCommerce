import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

function Item({item}){
    return(
        <Col lg={4} md={6} sm={12} xs={12} key={item.id} className="justify-content-center">
             <Card style={{ minWidth: '18rem' }}>
                <Card.Body>
                    <Button 
                        variant="link"
                        as={Link}
                        to={`/character/${item.id}`}
                    >
                        <Card.Img src={item.image} className="class-ImageCard"/>
                    </Button>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.race}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item