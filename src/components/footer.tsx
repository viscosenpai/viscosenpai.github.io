import React, { FC } from 'react';
import { Flex, Link, LinkProps } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';

const Footer = () => {
  const FooterLink: FC<LinkProps> = (props) => <Link ml="15px" {...props} />;
  return (
    <Flex as="footer" justify="center">
      <p>© {new Date().getFullYear()}, KAMA Hiroki</p>
      <FooterLink href="/">Privacy Policy</FooterLink>
      <FooterLink href="https://nextjs.org/">Next.js</FooterLink>
    </Flex>
  );
};

export default Footer;
