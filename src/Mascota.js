import {Card, Col} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";


function Mascota({ pet }) {

    const [mascota] = useState(pet);


    return (
        <Col>
            <Card className='mb-2' style = {{width: "10rem", height:'20rem'}}>
                <Link to ={'/mascotas/' + mascota.id}>
                    <Card.Img variant="top" className="imageEvent" src={mascota.foto} alt={mascota.nombre} />
                </Link>
                <Card.Body className="mb-3">
                    <Link to ={'/mascotas/' + mascota.id}>
                        <Card.Title>{mascota.nombre}</Card.Title>
                    </Link>
                    <Card.Text>{mascota.especie}</Card.Text>
                    <Card.Text>{mascota.raza}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Mascota;