import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ColorModeSwitch from './components/ColorModeSwitch'
import GameGrid from './components/GameGrid'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import GenreList from './components/GenreList'


const App = () => {

  const [selectedGenre, setSelectedGenre] = useState<Genre |null>(null)

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
            <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)}/>
          </GridItem>

        </Show>

        <GridItem area="main" >
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  )
}

export default App