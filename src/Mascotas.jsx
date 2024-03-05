import React, { useEffect, useState } from 'react'
import {Col, Row} from 'react-bootstrap'
import Mascota from './Mascota'
export default function Mascotas() {

  const [mascotas, setMascotas] = useState([]);

  useEffect(()=> {
    const url = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(url).then(response => response.json()).then((data) => {
        setMascotas(data);
    })
  }, []);

  return (
    <div>
        <Row>
            {mascotas.map((mascota) => (
                <Col key = {mascota.id} md={3}>
                    <Mascota pet = {mascota}/>
                </Col>
            ))}
        </Row>
    </div>
  )
}
