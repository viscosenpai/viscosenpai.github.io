import { chakra, useColorModeValue } from '@chakra-ui/react';
import { Props } from 'framer-motion/types/types';
import { FC } from 'react';

const MarkerHeader: FC<Props> = (props) => (
  <chakra.h3
    display="inline"
    borderRadius="1em 0 1em 0"
    bgGradient={useColorModeValue(
      'linear(to-r, #fffa96cc, #fffa9626)',
      'linear(to-r, #054d6ecc, #96c7ff25)'
    )}
    fontSize="1.6rem"
    fontWeight="bold"
    {...props}
  />
);

export default MarkerHeader;
