// all of our imports we need

import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"

// sent to useGames.ts
// stuff here

// props to pass data from parent component to child component 

const GameGrid = () => {

   // we have cut the usestate , our fetch, and useEffect
   // and now we simply use our custom hook useGames() hook
   const {games, error} = useGames() 

    // we may have other helper functions to add, delete or update data
  return (
    <>
        {/* display our data  ul  and li grid table usually a map with a unique key */}
        {/*  remember to use {} to do any logic */}

        <SimpleGrid>
            {games.map(game => <GameCard game={game} key={game.id}>{}</GameCard> )}
        </SimpleGrid>

        {/* render errors */}
        {error && <Text color={"red"}>{error}</Text>}
    </>
  )
}

export default GameGrid