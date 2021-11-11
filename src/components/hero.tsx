import { Flex, Box } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import React from 'react';

const Hero = () => {
  return (
    <Box as="main" p="5">
      <Flex
        direction="row"
        alignItems="center"
        justify="center"
        mx="auto"
        my="0"
        maxW="890px"
        height="78vh"
      >
        <Box textAlign="center">
          <chakra.h1
            fontSize="3.5rem"
            fontFamily="Pridi"
          >{`KAMA Hiroki: Portfolio`}</chakra.h1>
          <chakra.p fontSize="1.4rem">{`I'm Application developer`}</chakra.p>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
