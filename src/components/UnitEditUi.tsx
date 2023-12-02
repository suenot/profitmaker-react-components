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

const getAvailableLanguages = (activeLanguages: Language[], allLanguages: Language[]): Language[] => {
  const activeSymbols = activeLanguages.map(lang => lang.symbold);
  return allLanguages.filter(lang => !activeSymbols.includes(lang.symbold));
}

export const UnitEditUi = ({
  onClickBackButton,
  onClickSaveButton,
  options,
  setOptions,
  availableLanguages,
  created,
  onClickCreateButton,
}: {
  onClickBackButton: () => void;
  onClickSaveButton: () => void;
  options: UnitOptions,
  setOptions: (options: UnitOptions) => void;
  availableLanguages: Language[],
  created?: boolean,
  onClickCreateButton?: () => void
}) => {

  const bg = useColorModeValue('#fff', '#181818');

  const [_options, _setOptions] = useState<UnitOptions>(options);
  const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>('');

  const availableLanguagesFiltered = getAvailableLanguages(_options.languages, availableLanguages);

  const addLanguage = (symbolId: string) => {
    const language: Language | undefined = availableLanguages.find(lang => lang.symbold === symbolId);
    if (!language) return;
    _setOptions({
      ..._options,
      languages: [..._options.languages, language]
    })
  }

  return (
    <Box maxW='sm' minW='sm' w='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p='4' sx={{position: 'relative'}} bg={bg}>
    { created && <Button colorScheme='teal' variant='outline' sx={{position: 'absolute', top: 4, left: 4}} onClick={onClickBackButton}>
      <MdArrowBack />
    </Button> }
    { created ? <Button colorScheme='teal' variant='outline' sx={{position: 'absolute', top: 4, right: 4}} onClick={onClickSaveButton}>
      Save
    </Button> :
    <Button colorScheme='teal' variant='outline' sx={{position: 'absolute', top: 4, right: 4}} onClick={() => {onClickCreateButton && onClickCreateButton()}}>
        Create
      </Button> }
    <Flex
      align="center"
      justify="center"
      mb={4}
    >
      <Box position='relative'>
        {_options.unitSrc ? (<Avatar size='2xl' name='' src={_options.unitSrc} mb='1' />) : (<Identicon linkId={_options.unitId} size={128} />)}
      </Box>
    </Flex>

    <Input w={'100%'} mb={4} placeholder="Insert Avatar" value={_options.unitSrc} />
    <Input w={'100%'} mb={4} placeholder="Insert Ticker" value={_options.unitTicker}/>

    <Divider mb={6} mt={3} />
    <Tabs variant='soft-rounded' colorScheme='gray' sx={{
        '&>input:not(:last-child)': {
          marginBottom: 4
        }
      }}>
        <HStack justifyContent='space-between' alignItems='center' mb={4}>
          { _options.languages && _options.languages.length <= 2 &&  (
            <TabList>
              { _options.languages && _options.languages.map((item: Language) => (
                <Tab>
                  <Text>{item.symbold}</Text>
                </Tab>
              ))}
            </TabList>
          )}
          {/* if more than 2 that select */}
          { _options.languages && _options.languages.length > 2 &&  (
            <Select placeholder='Languages' w='10rem'>
              { _options.languages && _options.languages.map((item: Language) => (
                <option value={item.symbold}>{item.originalName}</option>
              ))}
            </Select>
          )}

          {/* if more than 2 that select */}
          <Select placeholder='Add languge' w='10rem' value={selectedLanguage} onChange={(e) => {
            addLanguage(e.target.value);
            setSelectedLanguage('');
          }}>
            { availableLanguages && availableLanguagesFiltered.map((item: Language) => (
              <option value={item.symbold}>{item.originalName}</option>
            ))}
          </Select>
        </HStack>
        <Input w={'100%'} placeholder="Insert Name" value={_options.unitName} onChange={()=>{}} />
        <Input w={'100%'} placeholder="Insert Description" value={_options.unitDescription} onChange={()=>{}} />
        <Button colorScheme='pink' variant='outline' sx={{width: '100%'}}>
          Remove language
        </Button>
      </Tabs>
    </Box>
  )
}
