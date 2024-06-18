import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"


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
                <Heading>{game.name}</Heading>
            </CardBody>
        </Card>
    </>
  )
}

export default GameCard