import { Flex, Box } from "@chakra-ui/react";

type DotProps = {
  color: string;
};
const Dot = ({ color }: DotProps) => (
  <Box w={4} h={4} borderRadius="50%" bg={color} m={1} />
);

type Props = {
  totalDots: number;
  dotsPerColumn: number;
  color: string;
};

const MultipleDotsGrid = ({ totalDots, dotsPerColumn, color }: Props) => {
  const renderDots = (): JSX.Element[] => {
    const dots: JSX.Element[] = [];
    for (let i = 0; i < totalDots; i++) {
      dots.push(<Dot key={i} color={color} />);
    }
    return dots;
  };

  return (
    <Flex flexWrap="wrap" justifyContent="center" mt={4}>
      {Array.from(Array(totalDots / dotsPerColumn).keys()).map(
        (column: number) => (
          <Flex key={column} flexDir="column" align="center" mx={4}>
            {renderDots().slice(
              column * dotsPerColumn,
              (column + 1) * dotsPerColumn
            )}
          </Flex>
        )
      )}
    </Flex>
  );
};

export default MultipleDotsGrid;
