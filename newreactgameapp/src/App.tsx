import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ColorModeSwitch from './components/ColorModeSwitch'
import GameGrid from './components/GameGrid'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'

// REFACTORED
export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
}

const App = () => {
//  REFACTORED
  // const [selectedGenre, setSelectedGenre] = useState<Genre |null>(null)

  // // rememeber we put our state where the parent component is so app is the parent for this usestate below
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <>
      {/* create our responsive layout with Chakra UI Grid */}
      {/* Nav, aside, main ______ responsive for desktop and mobile */}
      <Grid templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, //992
      }}>
        <GridItem area="nav" bg=''>
          <NavBar/>
          
        </GridItem>

        <Show above='lg'>
          <GridItem area="aside" padding={5}>
            {" "}
            <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
          </GridItem>

        </Show>

        <GridItem area="main" >
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform}) }/>
          {/* refactored below */}
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App