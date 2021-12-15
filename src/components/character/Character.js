import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCharacters } from '../../store/slices/characters'

const Character = () => {
  const { list: characters } = useSelector(state => state.characters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCharacters())
  }, [dispatch])

  return (
    <div>
      <h1>Personajes</h1>
      {characters.map((character, index) => (
        <div key={index}>
          <img src={character.image} alt="personaje" />
          <p>
            {' '}
            {character.alive === true ? 'VIVO' : 'FINADO'} /{' '}
            {character.hogwartsStudent === true ? 'ESTUDIANTE' : 'STAFF'}
          </p>
          <p>Nombre: {character.name}</p>
          <p>Cumpleaños: {character.dateOfBirth}</p>
          <p>Genero: {character.gender}</p>
          <p>Color de ojos: {character.eyeColour}</p>
          <p>Color de pelo: {character.hairColour}</p>
        </div>
      ))}
    </div>
  )
}

export default Character
