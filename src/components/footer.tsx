import React, { FC } from 'react';
import { Flex, Link, LinkProps } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';

const Footer = () => {
  const FooterLink: FC<LinkProps> = (props) => <Link ml="15px" {...props} />;
  return (
    <Flex as="footer" mb="1.5rem" justify="center">
      <chakra.p>© {new Date().getFullYear()}, KAMA Hiroki</chakra.p>
      <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
      <FooterLink href="https://nextjs.org/">Next.js</FooterLink>
    </Flex>
  );
};

export default Footer;
