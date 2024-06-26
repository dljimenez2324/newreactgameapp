
import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"


interface GameProps {
    
    game: Game
}

// to pass in data we need to pass in props
const GameCard = ({game}:GameProps) => {
  return (
    <>
        <Card>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                {/* lets now add the icons of the platforms the game works with */}
                {/* {game.parent_platforms.map(x => <Text>{x.platform.name}</Text>)} */}
                {/*  we can destructure and get just what we need   see below */}
                {/* This below is being moved to the PlatformIconList component */}
                {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
                <PlatformIconsList platforms={game.parent_platforms.map(platform => platform.platform)}/>

            </CardBody>
        </Card>
    </>
  )
}

export default GameCard