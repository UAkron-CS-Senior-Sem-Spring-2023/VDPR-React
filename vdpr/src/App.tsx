import * as React from "react"
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={5}>
          <Heading>
            Welcome to VDPR
          </Heading>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
