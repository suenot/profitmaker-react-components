import * as React from "react"

import {
  Box,
  useColorModeValue,
} from "@chakra-ui/react"

export const Portfolio = () => {

  const bg = useColorModeValue('#fff', '#181818');

  return (
    <Box>
      <Box maxW='sm' minW='sm' w='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p='4' bg={bg}>
      </Box>
    </Box>
  )
}
