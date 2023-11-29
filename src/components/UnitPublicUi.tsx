import * as React from "react"
import { useState, useEffect } from 'react';
import Identicon from "./Identicon";
import { MdBuild } from "react-icons/md";

import {
  Box,
  Text,
  VStack,
  HStack,
  theme,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
  AvatarProps,
  AvatarBadgeProps,
  EditableTextarea,
  Divider,
  Flex,
  Tooltip,
  useColorModeValue
} from "@chakra-ui/react"

export const UnitPublicUi = () => {
  const unitNameValue = "Dogecoin";
  const unitTickerValue = "DOGE";
  const unitDescriptionValue = 'Dogecoin is a popular cryptocurrency that started as a playful meme in 2013. It features the Shiba Inu dog from the "Doge" internet meme as its console.logo. Despite its humorous origins, Dogecoin has gained a dedicated following and is used for tipping content creators, charitable donations, and as a digital currency for various online payments. It distinguishes itself with a vibrant and welcoming community and relatively low payment fees.';
  const unitSrc = "";
  const unitId = 7003

  const bg = useColorModeValue('#fff', '#181818');
  // const bg = useColorModeValue('#fff', '#141214');


  return (
    <Box maxW='sm' minW='sm' w='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p='4' sx={{position: 'relative'}} bg={bg}>
      <Button leftIcon={<MdBuild />} colorScheme='pink' variant='outline' sx={{position: 'absolute', top: 4, right: 4}}>
        Edit
      </Button>
      <div>
        <Flex
          align="center"
          justify="center"
        >
          {unitSrc ? (<Avatar size='2xl' name='' src={unitSrc} mb='1' />) : (<Identicon linkId={unitId} size={128} />)}
        </Flex>
      </div>
      <Flex>
        <Text fontWeight='semibold' mr={1}>Name:</Text>
        <Text>{unitNameValue}</Text>
      </Flex>
      <Flex>
        <Text fontWeight='semibold' mr={1}>Ticker:</Text>
        <Text>{unitTickerValue}</Text>
      </Flex>
      <Box>
        <Text fontWeight='semibold' mr={1}>Description:</Text>
        <Box>{unitDescriptionValue}</Box>
      </Box>
    </Box>
  )
}
