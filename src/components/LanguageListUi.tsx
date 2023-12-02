import * as React from "react";
import { Suspense } from 'react';
import { useState, useEffect, FunctionComponent } from 'react';
import Identicon from "./Identicon";
import {
  Box,
  Input,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { formatNumber } from "../imports/formatNumber";
import i18next from 'i18next'
import ISO6391 from 'iso-639-1'
import "/node_modules/flag-icons/css/flag-icons.min.css"

import { languageToCountry } from '../languageToCountry';

function Flag({ languageCode }: { languageCode: string }) {

  const countryCode = languageToCountry[languageCode];

  if (!countryCode) {
    console.error(`Country code is undefined for language code: ${languageCode}`);
    return null;
  }
  return <span className={`fi fi-${countryCode} fis`} style={{borderRadius: '100%', height: '24px', width: '24px'}}></span>
  // return <div><span className="fi fi-gr"></span> <span className="fi fi-gr fis"></span></div>
  // return <img src={`flag-icons/flags/1x1/${countryCode}.svg`} alt={`${countryCode} flag`} />;
}
// const allLanguages: string[] = i18next.services.languageUtils.toResolveHierarchy('en-US', i18next.languages);
// const allLanguages: any = i18next.languages;
// const allLanguages = ISO6391.getAllCodes();
// Define a mapping from language codes to avatar URLs
const languageAvatars: any = {
  en: 'url-to-english-avatar',
  es: 'url-to-spanish-avatar',
  // Add more languages here...
};

const allLanguages = ISO6391.getAllCodes().map(code => ({
  code,
  name: ISO6391.getName(code),
  avatar: languageAvatars[code] || 'default-avatar-url', // Use a default avatar if one is not defined for this language
}));

console.log('All Languages:', allLanguages);

// console.log('All Languages:', allLanguages);

export const LanguageListUi = () => {
  const bg = useColorModeValue("#fff", "#181818");

  const data = [
    {
      symbold: 'ru',
      originalName: 'Русский',
      englishName: 'Russian',
    },
    {
      symbold: 'en',
      originalName: 'English',
      englishName: 'English',
    },
    {
      symbold: 'uz',
      originalName: 'O\'zbekcha',
      englishName: 'Uzbek',
    },
    {
      symbold: 'uk',
      originalName: 'Українська',
      englishName: 'Ukrainian',
    },
    {
      symbold: 'by',
      originalName: 'Беларуская',
      englishName: 'Belarusian',
    },
    {
      symbold: 'kk',
      originalName: 'Қазақша',
      englishName: 'Kazakh',
    },
  ]

  return (
    <Box
      maxW="sm"
      minW="sm"
      w="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={0}
      sx={{ position: "relative" }}
      bg={bg}
    >
      <Box p={4}>
        <Input w={"100%"} placeholder="Search" />
      </Box>
      <TableContainer sx={{maxHeight: '320px', overflowY: 'auto'}}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allLanguages.map((item) => {
              return (
                <Tr key={item.code}>
                  <Td>{item.code}</Td>
                  <Td>
                    <Flex alignItems="center">
                      <Box mr={2}>
                        <Flag languageCode={item.code} />
                      </Box>
                      <Box>{item.name}</Box>
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
