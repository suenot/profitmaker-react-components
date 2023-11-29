import * as React from "react"
import { useState, useEffect } from 'react';
import Identicon from "./Identicon";
import { MdBuild, MdArrowBack, MdRemoveCircle } from "react-icons/md";

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
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Select,
  Input,
  useColorModeValue
} from "@chakra-ui/react"

export const UnitEditUi = () => {
  const unitNameValue = "Dogecoin";
  const unitTickerValue = "DOGE";
  const unitDescriptionValue = "...";
  const unitSrc = "";
  const unitId = 7003

  const bg = useColorModeValue('#fff', '#181818');


  return (
    <Box maxW='sm' minW='sm' w='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p='4' sx={{position: 'relative'}} bg={bg}>
    <Button colorScheme='teal' variant='outline' sx={{position: 'absolute', top: 4, left: 4}}>
      <MdArrowBack />
    </Button>
    <Button colorScheme='teal' variant='outline' sx={{position: 'absolute', top: 4, right: 4}}>
      Save
    </Button>
    <Flex
      align="center"
      justify="center"
      mb={4}
    >
      {unitSrc ? (<Avatar size='2xl' name='' src={unitSrc} mb='1' />) : (<Identicon linkId={unitId} size={128} />)}
    </Flex>

    <Input w={'100%'} mb={4} placeholder="Insert Avatar" />
    <Input w={'100%'} mb={4} placeholder="Insert Ticker" />

    <Divider mb={6} mt={3} />
    <Tabs variant='soft-rounded' colorScheme='gray' sx={{
        '&>input:not(:last-child)': {
          marginBottom: 4
        }
      }}>
        <HStack justifyContent='space-between' alignItems='center' mb={4}>
          <TabList>
            <Tab>
              <Text>En</Text>
              {/* <MdRemoveCircle/> */}
            </Tab>
            <Tab>
              <Text>Ru</Text>
              {/* <MdRemoveCircle/> */}
            </Tab>
          </TabList>
          {/* if more than 2 that select */}
          <Select placeholder='Add languge' w='10rem'>
            <option value='option1'>Uz</option>
            <option value='option2'>Es</option>
            <option value='option3'>Uk</option>
          </Select>
        </HStack>
        <Input w={'100%'} placeholder="Insert Name" />
        <Input w={'100%'} placeholder="Insert Description"/>
        <Button colorScheme='pink' variant='outline' sx={{width: '100%'}}>
          Remove language
        </Button>
      </Tabs>
    </Box>
  )
}
