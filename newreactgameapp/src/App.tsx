import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ColorModeSwitch from './components/ColorModeSwitch'
import GameGrid from './components/GameGrid'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'


const App = () => {

  const [selectedGenre, setSelectedGenre] = useState<Genre |null>(null)

  // rememeber we put our state where the parent component is so app is the parent for this usestate below
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

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
            <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)}/>
          </GridItem>

        </Show>

        <GridItem area="main" >
          <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform) }/>
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App