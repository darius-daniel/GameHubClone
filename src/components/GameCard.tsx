import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import PlatformList from './PlatformIconList';

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
}
