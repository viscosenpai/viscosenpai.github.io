import { FC } from 'react';
import { chakra } from '@chakra-ui/system';
import { Props } from 'framer-motion/types/types';

const PageHeader: FC<Props> = (props) => (
  <chakra.h2
    fontFamily="Pridi"
    fontSize="3rem"
    fontWeight="extrabold"
    {...props}
  />
);

export default PageHeader;
