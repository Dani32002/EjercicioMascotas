import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


export default function Detail() {

    const params = useParams();
    const [mascota, setMascota] = useState({});

    useEffect(()=> {
        const url = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        fetch(url).then(response => response.json()).then((data) => {
        console.log(params.mascotaId);

        setMascota(data.find(pet => {
            return pet.id === Number(params.mascotaId);
        }));
    })
    }, [params]);


  return (
    <>
        <h1>{mascota.nombre}</h1>
        <img src={mascota.foto} alt={mascota.name} style={{width:'25%'}}/>
        <h3>{mascota.especie}</h3>
        <h3>{mascota.raza}</h3>
        <p>{mascota.descripcion}</p>
    </>
  )
}
