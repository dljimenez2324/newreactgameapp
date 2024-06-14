// all of our imports we need

import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { Text } from "@chakra-ui/react"

// help us shap our data in the form of our interfaces (type)
interface Game {
    id: number
    name: string
}

interface FetchGameResponse {
    count: number
    results: Game []
}
// props to pass data from parent component to child component 

const GameGrid = () => {

    // useStates to help us update our UI with our games or data
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')


    // Create a helper function to getch our data
    const fetchGames = () => {
        apiClient.get('/games')
        .then(response => setGames(response.data.results))
        .catch(error => {
            setError(error.message)
        })
    }

    /// useeffect to fetch our data

    useEffect(() => {
    
        fetchGames();
      
    }, [])
    

    // we may have other helper functions to add, delete or update data
  return (
    <>
        {/* display our data  ul  and li grid table usually a map with a unique key */}
        {/*  remember to use {} to do any logic */}

        <ul>
            {games.map(game => <li key={game.id}>{game.name}</li> )}
        </ul>

        {/* render errors */}
        {error && <Text color={"red"}>{error}</Text>}
    </>
  )
}

export default GameGrid