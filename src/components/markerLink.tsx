import { Link, LinkProps, useColorModeValue } from '@chakra-ui/react';

const MarkerLink = (props: LinkProps) => (
  <Link
    position="relative"
    textDecoration="none"
    bgGradient={useColorModeValue(
      'linear(to-r, #fffa96cc, #fffa96cc)',
      'linear(to-r, #f92672cc, #f92672cc)'
    )}
    backgroundRepeat="no-repeat"
    backgroundSize="100% 0.2em"
    backgroundPosition="0 88%"
    {...props}
  />
);

export default MarkerLink;
