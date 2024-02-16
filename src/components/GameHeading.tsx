import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  const platform = gameQuery.platform?.name;
  const genre = gameQuery.genre?.name;

  return (
    <Heading marginY={5} as="h1" fontSize="5xl">
      {platform} {genre} Games
    </Heading>
  );
}
