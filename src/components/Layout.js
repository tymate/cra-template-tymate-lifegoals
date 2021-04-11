import { Box, Grid, Container, HStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import Logo from 'components/Logo';

const Layout = ({ children }) => (
  <Box fontSize="lg">
    <Grid
      minH="100vh"
      p={8}
      paddingBottom={32}
      gridTemplateRows="64px 1fr"
      gridGap={12}
    >
      <HStack justifyContent="space-between" width="100%">
        <Logo />
        <ColorModeSwitcher justifySelf="flex-end" />
      </HStack>

      <Container>{children}</Container>
    </Grid>
  </Box>
);

export default Layout;
