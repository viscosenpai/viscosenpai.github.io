import { Link, LinkProps, useColorModeValue } from '@chakra-ui/react';

const MarkerLink = (props: LinkProps) => (
  <Link
    position="relative"
    textDecoration="none"
    bgGradient={useColorModeValue(
      'linear(to-r, #fffa96cc, #fffa96cc)',
      'linear(to-r, #054d6ecc, #054d6ecc)'
    )}
    backgroundRepeat="no-repeat"
    backgroundSize="100% 0.2em"
    backgroundPosition="0 88%"
    transitionProperty="background-size"
    transitionDuration="0.25s"
    transitionTimingFunction="ease-in"
    _hover={{
      backgroundSize: '100% 88%',
      // textDecoration: 'none',
    }}
    {...props}
  />
);

export default MarkerLink;
