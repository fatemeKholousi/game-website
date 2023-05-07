import { HStack, Text, Flex } from "@chakra-ui/react";
import React from "react";
import GameCard from "./GameCard";
import useGame from "../hooks/useGame";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { getCroppedImageUrl } from "../assets/getCroppedImageUrl";

function GridGameCards() {
  const { data: cardsResult, error, isLoading } = useGame();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Flex direction="column" w="100%">
      {error && (
        <Text w="100%" textAlign="center">
          {error}
        </Text>
      )}
      <HStack wrap="wrap" justifyContent="center" gap={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {cardsResult?.map((game) => (
          <GameCardContainer>
            <GameCard
              gameCover={getCroppedImageUrl(game.background_image)}
              supportedServices={game.platforms}
              title={game.name}
              score={game.metacritic}
            />
          </GameCardContainer>
        ))}
      </HStack>
    </Flex>
  );
}

export default GridGameCards;
