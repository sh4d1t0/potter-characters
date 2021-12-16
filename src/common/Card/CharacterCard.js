import React from 'react'

const CharacterCard = props => {
  const { data } = props
  return (
    <>
      <img src={data.image} alt="personaje" />
      <p>
        {' '}
        {data.alive === true ? 'VIVO' : 'FINADO'} /{' '}
        {data.hogwartsStudent === true ? 'ESTUDIANTE' : 'STAFF'}
      </p>
      <p>Nombre: {data.name}</p>
      <p>Cumpleaños: {data.dateOfBirth}</p>
      <p>Genero: {data.gender}</p>
      <p>Color de ojos: {data.eyeColour}</p>
      <p>Color de pelo: {data.hairColour}</p>
      <p>Casa: {data.house}</p>
    </>
  )
}

export default CharacterCard
