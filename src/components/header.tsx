import { Box, Flex, LinkProps } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react';
import React, { FC } from 'react';

const Header = () => {
  const NavLink: FC<LinkProps> = (props) => (
    <Link
      ml="15px"
      textDecor="none"
      display="inline-block"
      position="relative"
      {...props}
    />
  );

  return (
    <Flex
      as="header"
      alignItems="center"
      justify="center"
      padding="1rem"
      fontSize="1.2rem"
    >
      <Box maxW="890px">
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/about">ABOUT</NavLink>
        <NavLink href="/blog">BLOG</NavLink>
        <NavLink href="https://github.com/viscosenpai">GITHUB</NavLink>
      </Box>
    </Flex>
  );
};

export default Header;
