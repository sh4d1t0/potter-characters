import React from 'react'
import { useSelector } from 'react-redux'
import { getAllCharacters } from '../../features/characters/charactersSlice'
import CharacterCard from '../../common/Card/CharacterCard'

const CharacterStaffList = () => {
  const characters = useSelector(getAllCharacters)
  return (
    <div>
      {characters.map((character, index) =>
        character.hogwartsStudent === true ? (
          <CharacterCard key={index} data={character} />
        ) : (
          ''
        )
      )}
    </div>
  )
}

export default CharacterStaffList
