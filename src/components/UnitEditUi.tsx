import * as React from "react"
import { useState, useEffect } from 'react';
import Identicon from "./Identicon";
import { MdBuild, MdArrowBack, MdRemoveCircle, MdEdit, MdClose } from "react-icons/md";
import { UnitOptions, Language } from "./types";

import {
  Box,
  Text,
  HStack,
  Button,
  Avatar,
  Divider,
  Flex,
  Tabs,
  TabList,
  Tab,
  Select,
  Input,
  useColorModeValue
} from "@chakra-ui/react"

export const UnitEditUi = ({
  onClickBackButton,
  onClickSaveButton,
  options,
  setOptions,
  availableLanguages,
}: {
  onClickBackButton: () => void;
  onClickSaveButton: () => void;
  options: UnitOptions,
  setOptions: (options: UnitOptions) => void;
  availableLanguages: Language[],
}) => {

  const bg = useColorModeValue('#fff', '#181818');


  return (
    <Box maxW='sm' minW='sm' w='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p='4' sx={{position: 'relative'}} bg={bg}>
    <Button colorScheme='teal' variant='outline' sx={{position: 'absolute', top: 4, left: 4}} onClick={onClickBackButton}>
      <MdArrowBack />
    </Button>
    <Button colorScheme='teal' variant='outline' sx={{position: 'absolute', top: 4, right: 4}} onClick={onClickSaveButton}>
      Save
    </Button>
    <Flex
      align="center"
      justify="center"
      mb={4}
    >
      <Box position='relative'>
        {options.unitSrc ? (<Avatar size='2xl' name='' src={options.unitSrc} mb='1' />) : (<Identicon linkId={options.unitId} size={128} />)}
        <Button colorScheme='white' size='xs' sx={{position: 'absolute', right: '64px', top: '52px'}} variant='outline'>
          <MdEdit />
        </Button>
        <Button colorScheme='white' size='xs' sx={{position: 'absolute', right: '28px', top: '52px'}} variant='outline'>
          <MdClose />
        </Button>
      </Box>
    </Flex>
    {/* <Avatar size='128' name='' src={unitSrc} mb='1' /> */}


    {/* <Input w={'100%'} mb={4} placeholder="Insert Avatar" /> */}
    <Input w={'100%'} mb={4} placeholder="Insert Ticker" value={options.unitTicker}/>

    <Divider mb={6} mt={3} />
    <Tabs variant='soft-rounded' colorScheme='gray' sx={{
        '&>input:not(:last-child)': {
          marginBottom: 4
        }
      }}>
        <HStack justifyContent='space-between' alignItems='center' mb={4}>
          { options.languages && options.languages.length <= 2 &&  (
            <TabList>
              { options.languages && options.languages.map((item: Language) => (
                <Tab>
                  <Text>{item.symbold}</Text>
                </Tab>
              ))}
            </TabList>
          )}
          {/* if more than 2 that select */}
          { options.languages && options.languages.length > 2 &&  (
            <Select placeholder='Languages' w='10rem'>
              { options.languages && options.languages.map((item: Language) => (
                <option value={item.symbold}>{item.originalName}</option>
              ))}
            </Select>
          )}

          {/* if more than 2 that select */}
          <Select placeholder='Add languge' w='10rem'>
            { availableLanguages && availableLanguages.map((item: Language) => (
              <option value={item.symbold}>{item.originalName}</option>
            ))}
          </Select>
        </HStack>
        <Input w={'100%'} placeholder="Insert Name" value={options.unitName} onChange={()=>{}} />
        <Input w={'100%'} placeholder="Insert Description" value={options.unitDescription} onChange={()=>{}} />
        <Button colorScheme='pink' variant='outline' sx={{width: '100%'}}>
          Remove language
        </Button>
      </Tabs>
    </Box>
  )
}
