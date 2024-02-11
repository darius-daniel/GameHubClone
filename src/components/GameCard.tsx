import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody fontSize="2xl">
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
