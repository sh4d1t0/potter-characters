import React from 'react'
import { useSelector } from 'react-redux'
import { getAllCharacters } from '../../features/characters/charactersSlice'
import CharacterCard from '../../common/Card/CharacterCard'

const CharacterList = () => {
  const characters = useSelector(getAllCharacters)
  return (
    <div>
      {characters.map((character, index) => (
        <CharacterCard key={index} data={character} />
      ))}
    </div>
  )
}

export default CharacterList
