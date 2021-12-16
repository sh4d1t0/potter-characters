import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCharacters from '../../api/hp-charactersApi'
import { setCharactersList } from '../../features/characters/charactersSlice'
import CharacterList from '../character/CharacterList'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchAllCharacters = async () => {
      const response = await getCharacters.get().catch(error => {
        console.log('Error:', error)
      })
      dispatch(setCharactersList(response.data))
    }
    fetchAllCharacters()
  }, [])

  return (
    <div>
      <h1>Personajes</h1>
      <CharacterList />
    </div>
  )
}

export default Home
